/**
 * ブロックを削除する関数
 */
const removeBlock = (EditorState, blockKey) => {
  const contentState = EditorState.getCurrentContent();
  const blockMap = contentState.getBlockMap();

  // 指定のキーのブロックを削除し、新たな blockMap を取得
  const newBlockMap = blockMap.remove(blockKey);
  const newContentState = contentState.merge({
    blockMap: newBlockMap,
  });

  // 任意のキーが削除された後の EditorState
  const newEditorState = EditorState.push(
    EditorState,
    newContentState,
    "remove-block"
  );

  // 新たな EditorState を返す
  // この後、使う側で setEditorState()で状態を更新すれば、エディタ上でブロックが削除される
  return newEditorState;
};

export default removeBlock;
