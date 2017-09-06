var util = require('../../utils/util');

Page({
  data: {
    list: []
  },
  /**
   * 热门车型和主品牌
   */
  fetchData: function () {
    let that = this;
    util.fetch('http://api.cyb.kuaiqiangche.com/car/brand_list', function (data) {
      let brandList = [];
      let common = data.data.common;
      for (let k in common) {
        brandList.push(common[k]);
      }
      that.setData({
        hotCar: data.data.hot,
        commonCar: brandList
      });
    });
  },
  onLoad: function (options) {
    let that = this;
    this.setData({
      list : [
        {
          //行程名称
          name: '西湖一日游',
          //出发时间
          time: '2017-09-09 13:00',
          //目标人数
          target: 5,
          //已加入人数
          current: 3*100/5,
          //男性人数
          male: 2 * 100/5,
          //女性人数
          female: 1,
          //领队微信昵称
          leader: '古木奇',
          //领队历史评分
          score: 4.5,
          //行程状态，-1已取消，0未开始，1已出发，2已结束
          status: 0,
          //是否已加入,0未加入，1已加入
          isin: 0,
          //行程描述
          content: '环西湖游，途径灵隐寺，雷峰塔等景点的返回噶的发生的发生的发生的发的是，雷峰塔等景点的返回噶的发生的发生的发生的发的是，雷峰塔等景点的返回噶的发生的发生的发生的发的是'
        }, {
          //行程名称
          name: '湘湖骑行',
          //出发时间
          time: '2017/9/9',
          //目标人数
          target: 10,
          //已加入人数
          current: 3 * 100/10,
          //男性人数
          male: 2 * 100/10,
          //女性人数
          female: 4,
          //领队微信昵称
          leader: '胡胡',
          //领队历史评分
          score: 4.8,
          //行程状态，-1已取消，0未开始，1已出发，2已结束
          status: 0,
          //是否已加入,0未加入，1已加入
          isin: 1,
          //行程描述
          content: '环西湖游，途径灵隐寺，雷峰塔等景点的返回噶的发生的发生的发生的发的是'
        }, {
          //行程名称
          name: '舟山行',
          //出发时间
          time: '2017/9/9',
          //目标人数
          target: 10,
          //已加入人数
          current: 3 * 100 / 10,
          //男性人数
          male: 2 * 100 / 10,
          //女性人数
          female: 4,
          //领队微信昵称
          leader: '胡胡',
          //领队历史评分
          score: 4.8,
          //行程状态，-1已取消，0未开始，1已出发，2已结束
          status: 0,
          //是否已加入,0未加入，1已加入
          isin: 1,
          //行程描述
          content: '环西湖游，途径灵隐寺，雷峰塔等景点的返回噶的发生的发生的发生的发的是'
        }, {
          //行程名称
          name: '绍兴喝一杯',
          //出发时间
          time: '2017/9/9',
          //目标人数
          target: 10,
          //已加入人数
          current: 3 * 100 / 10,
          //男性人数
          male: 2 * 100 / 10,
          //女性人数
          female: 4,
          //领队微信昵称
          leader: '胡胡',
          //领队历史评分
          score: 4.8,
          //行程状态，-1已取消，0未开始，1已出发，2已结束
          status: 0,
          //是否已加入,0未加入，1已加入
          isin: 1,
          //行程描述
          content: '环西湖游，途径灵隐寺，雷峰塔等景点的返回噶的发生的发生的发生的发的是'
        }
      ]
    })
  }
})