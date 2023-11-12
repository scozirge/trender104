const querystring = require('querystring');

module.exports = {
    GetURL: function (keyword, salary) {
        // 中文編碼
        const encodedKeyword = querystring.escape(keyword);

        // URL建立
        const baseUrl = 'https://www.104.com.tw/jobs/search/?';
        const queryParams = {
            ro: 0,  // 全職/兼職，0代表不限
            keyword: encodedKeyword,
            sctp: 'M', // 薪資類型，M代表月薪
            scmin: salary, // 最低薪資
            scstrict: 1,
            scneg: 0,
            page: 1, // 第幾頁
            mode: 's',
            jobsource: '2018indexpoc',
            langFlag: 0,
            langStatus: 0,
            recommendJob: 1,
            hotJob: 1
        };

        // 將查詢的參數轉為URL字
        const queryString = querystring.stringify(queryParams);

        return baseUrl + queryString;
    }
}
