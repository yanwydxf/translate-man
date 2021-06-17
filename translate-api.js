const WebRequest = require("web-request");

module.exports = {
    async _translate(keyword) {
        let transret = keyword;
        // 获取选中的文本
        let url = "https://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i="
        if (keyword) {
            url = url + encodeURI(keyword);
            await WebRequest.get(url).then(resp => {
                let rep = JSON.parse(resp.content);
                transret = rep.translateResult[0][0].tgt;
                console.log(transret)
            }).catch(error => {
                transret = 'wait 网络离家出走了';
            });
        }
        console.log("1" + transret);
        return transret;
    }
}