import React from 'react';

import './footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <p>© 2019 <a href="http://www.zhuyuntao.cn/">zyt</a>. Powered by <a href="http://www.zhuyuntao.cn" target="_blank">blog</a> &amp; <a href="http://www.zhuyuntao.cn" target="_blank">Initial</a>.</p>
                    <p><a href="http://www.miitbeian.gov.cn" className="icpnum" target="_blank" rel="nofollow">苏</a></p>
                </div>
            </div>
        );
    }
}