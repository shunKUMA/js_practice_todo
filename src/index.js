const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add_txt").value;
  document.getElementById("add_txt").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "row";
  // li生成
  const li = document.createElement("li");
  // p生成
  const p = document.createElement("p");
  p.innerText = text;

  // btn(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    const text = addTarget.children[1].innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete_list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.children[1].innerText;
      createIncompleteList(text);
    });

    // divの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget);
  });

  // btn(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete_list").appendChild(div);
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
