const router = require('koa-router')();
const TagModel = require('../models/tagModel');

router.prefix('/api');

/** 
 * 获取tags，没有参数，则获取所有
*/
router.get('/tag', async (ctx, next) => {
    let query = ctx.query,
        // 没有范围，则返回所有的数据
        start = query.start - 0 || 0,
        end = query.end - 0 || 0,
        res = {
            result: true,
            data: {}
        }
    
    try {
        res.data.tags = await TagModel.getTags(start, end);
        res.data.nums = await TagModel.getTagsNum();
    } catch(e) {
        res.result = false;
    }

    ctx.body = res;
});

// 保存tag新标签
router.post('/tag', async (ctx, next) => {
    let query = ctx.request.body,
        tagName = query.tagName,
        tagNum = query.tagNum || 0,
        tag = new TagModel({
            tagName,
            tagNum
        }),
        res = {
            result: true,
            msg: 'save success'
        };
    
    try {
        tag.save();
    } catch(e) {
        res.result = false;
        res.msg = 'save error!';
    }
    
    ctx.body = res;
});

// 修改
router.put('/tag', async (ctx, next) => {
    let body = ctx.request.body,
        tagName = body.tagName,
        newName = body.newName,
        res = {
            result: true
        };

    try {
        // 更新tag标签名
        await TagModel.updateTagName(tagName, newName);
    } catch(e) {
        res.result = false;
        res.msg = 'update error'
    }

    ctx.body = res;
});
// 删除
router.delete('/tag', async (ctx, next) => {
    let body = ctx.request.body,
        tagName = body.tagName,
        res = {
            result: true
        };

    try {
        await TagModel.removeTag(tagName);
    } catch(e) {
        res.result = false;
    }

    ctx.body = res;
});


module.exports = router;