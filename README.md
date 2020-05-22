# redux-github-viewer




# メモ
## 必要機能
*Issue
    *state必要要素
        *issueリスト
        *issue{タイトル,説明,ステータス,作成者,作成日付,更新日付}

    1.検索機能
        1.inputを取得しフィルターissueリストを返す
    2.削除機能
        1.チェックボックス一番上→全部チェックが入る
        2.delteボタン→選択されたissueをリストから削除
    3.追加機能
        1.Newボタン→追加モーダル登場
        2.input内容をもとに「作成」ボタンでissueリストに追加
        3.「閉じる」ボタンでキャンセル
＊Profile
    *state必要要素
        *ユーザープロフィール（本来はgitから持ってくる？）
        *profile{pict, name, e-mail}
    1.（本来は）情報を受け取って表示

*その他
    
