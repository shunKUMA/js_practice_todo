const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add_txt").value;
  document.getElementById("add_txt").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "row";

  // li生成
  const li = document.createElement("li");

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // btn(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // btn(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete_list").removeChild(deleteTarget);
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
