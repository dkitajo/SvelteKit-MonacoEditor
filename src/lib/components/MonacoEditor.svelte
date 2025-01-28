<script>
	import { onDestroy, onMount, createEventDispatcher  } from 'svelte';

    const dispatch = createEventDispatcher();


	let { inputValue } = $props();
	let editor; // エディターのインスタンス
	let monaco; // Monaco Editorライブラリ
	let editorContainer; // エディターを表示するHTML要素

	onMount(async () => {
		// $lib/monacoからMonaco Editorをインポート
		monaco = (await import('$lib/monaco')).default;

		// エディター用のモデル（表示するコードとその言語を定義）
		const model = monaco.editor.createModel(
			inputValue, // 初期コード
			'javascript' // 使用する言語（例: 'javascript', 'typescript', 'html', 'css'）
		);

		// Monaco Editorのオプションを設定してエディターを作成
		editor = monaco.editor.create(editorContainer, {
			model, // 上で作成したモデルを使用
			theme: 'vs-dark', // テーマ（例: 'vs-dark', 'vs-light'）
			automaticLayout: true, // コンテナサイズの変更にエディターが自動対応
			readOnly: false, // trueにするとエディターが読み取り専用になる
			fontSize: 14, // フォントサイズ
			minimap: { enabled: true }, // ミニマップ（コードプレビュー）を表示するか
			wordWrap: 'on', // 長い行を折り返す（'off', 'on', 'wordWrapColumn', 'bounded'）
			tabSize: 2 // タブのスペース数
		});

		// エディター内で内容が変更された場合に`change`イベントを発火
		editor.onDidChangeModelContent(() => {
			const value = editor.getValue();
			console.log(value); // 変更内容をコンソールに表示（デバッグ用）

			// 親コンポーネントに変更内容を通知
			dispatch('change', value);
		});
	});

	onDestroy(() => {
		// エディターのリソースを解放
		if (editor) {
			editor.dispose();
		}
		// すべてのモデルを解放
		if (monaco) {
			monaco.editor.getModels().forEach((model) => model.dispose());
		}
	});
</script>

<div>
	<!-- エディターを表示するコンテナ -->
	<div class="container" bind:this={editorContainer}></div>
</div>

<style>
	.container {
		width: 100%; /* コンテナの横幅を100%に設定 */
		height: 600px; /* コンテナの高さを600pxに設定 */
	}
</style>
