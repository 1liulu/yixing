var name = ['李磊', '孙东剑', '孙运超', '康三亚', '罗阿洲', '刘准生', '何强',
    '卢国明', '刘书琪', '王金龙', '张峰', '朱辉', '陈晓桦', '任明明',
    '赵志远', '梁实秋', '李聪', '蔡传宝', '孙永泽', '郑丙政', '李铭珂',
    '张焕崇', '闫家宝', '赵鑫', '李泳峰', '潘凯旋', '焦裕众'
];
var arras=[
    {"薛云飞":"胡振","1987.11":"1987.08","5":"5","11":"11","2010.01 党员":"2007.01 党员","2011.06":"2004.12","17":"18","25":"26","32":"33","山东省青岛市":"山东省淄博市张店区远景花园5号楼三单元902室","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15762876557"},
    {"薛云飞":"刘骐源","1987.11":"1992.10","5":"5","11":"11","2010.01 党员":"2017.07 预备党员","2011.06":"2015.12","17":"18","25":"26","32":"33","山东省青岛市":"山东省临沂市临沭县","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15588068880"},
    {"薛云飞":"杨凯","1987.11":"1990.02","5":"5","11":"12","2010.01 党员":"2014.12 党员","2011.06":"2011.12","17":"19","25":"27","32":"34","山东省青岛市":"山东省邹平县焦桥镇张官村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15063306370"},
    {"薛云飞":"周洋","1987.11":"1992.05","5":"5","11":"12","2010.01 党员":"2016.06 党员","2011.06":"2010.12","17":"19","25":"27","32":"33","山东省青岛市":"山东省莱芜市莱城区滨河花苑新园67号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15063386119"},
    {"薛云飞":"董广杰","1987.11":"1992.08","5":"5","11":"13","2010.01 党员":"2013.06 党员","2011.06":"2010.12","17":"21","25":"28","32":"39","山东省青岛市":"甘肃省宁县早胜镇南庄村六组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13325200937"},
    {"薛云飞":"金烁","1987.11":"1988.08","5":"5","11":"11","2010.01 党员":"2008.11 党员","2011.06":"2005.12","17":"23","25":"28","32":"35","山东省青岛市":"山东省淄博市恒台县马桥镇马桥村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"18816168081"},
    {"薛云飞":"李磊","1987.11":"1988.09","5":"5","11":"12","2010.01 党员":"2010.06 党员","2011.06":"2006.12","17":"20","25":"31","32":"37","山东省青岛市":"山东省淄博市周村胜利居民区","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13615336033"},
    {"薛云飞":"孙东剑","1987.11":"1989.06","5":"5","11":"11","2010.01 党员":"2005.04 党员","2011.06":"2012.08","17":"20","25":"29","32":"36","山东省青岛市":"山东省莱芜市莱城区凤城街道办事处万福南路48号院","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13963420492"},
    {"薛云飞":"孙运超","1987.11":"1991.10","5":"5","11":"12","2010.01 党员":"2013.06 党员","2011.06":"2010.12","17":"21","25":"29","32":"38","山东省青岛市":"山东省临沂市莒南县板泉镇","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13475563344"},
    {"薛云飞":"康三亚","1987.11":"1991.04","5":"5","11":"13","2010.01 党员":"2010.12 党员","2011.06":"2010.12","17":"21","25":"31","32":"35","山东省青岛市":"江苏省徐州市睢宁县宫山镇赵山村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"18560389994"},
    {"薛云飞":"罗阿州","1987.11":"1993.02","5":"5","11":"13","2010.01 党员":"2015.06 党员","2011.06":"2010.12","17":"21","25":"31","32":"39","山东省青岛市":"甘肃省宁县南义乡屯村罗北组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"18678132119"},
    {"薛云飞":"刘准生","1987.11":"1994.03","5":"5","11":"13","2010.01 党员":"2013.11 党员","2011.06":"2011.12","17":"21","25":"29","32":"39","山东省青岛市":"河南省信阳市平桥区肖王乡刘湖村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13176588692"},
    {"薛云飞":"何强","1987.11":"1993.03","5":"5","11":"14","2010.01 党员":"2015.06 党员","2011.06":"2011.12","17":"21","25":"30","32":"39","山东省青岛市":"山东省滕州市北辛街道教场","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15314286119"},
    {"薛云飞":"卢国明","1987.11":"1993.09","5":"5","11":"15","2010.01 党员":"2016.06 党员","2011.06":"2011.12","17":"21","25":"31","32":"39","山东省青岛市":"河南省汤阴县菜园镇大偏店村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13305330242"},
    {"薛云飞":"刘书琪","1987.11":"1992.12","5":"5","11":"12","2010.01 党员":"2016.08 党员","2011.06":"2011.12","17":"21","25":"31","32":"39","山东省青岛市":"山东省临沂市罗庄区高都办事处","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15715312883"},
    {"薛云飞":"王金龙","1987.11":"1992.09","5":"5","11":"12","2010.01 党员":"2015.07 党员","2011.06":"2011.12","17":"21","25":"31","32":"39","山东省青岛市":"山东省淄博市临淄区齐都镇蒋王村32号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"18632555173"},
    {"薛云飞":"张峰","1987.11":"1993.09","5":"5","11":"14","2010.01 党员":"2016.05 团员","2011.06":"2012.12","17":"21","25":"29","32":"39","山东省青岛市":"山西省绛县郝庄乡闫庄村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15806431756"},
    {"薛云飞":"朱辉","1987.11":"1995.03","5":"5","11":"14","2010.01 党员":"2015.06 党员","2011.06":"2012.12","17":"21","25":"31","32":"39","山东省青岛市":"山西省运城市绛县古绛镇东关村一组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13345208119"},
    {"薛云飞":"陈晓桦","1987.11":"1995.02","5":"5","11":"14","2010.01 党员":"2016.06 党员","2011.06":"2012.12","17":"21","25":"31","32":"39","山东省青岛市":"陕西省运城市绛县陈村第一居民组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"18615338708"},
    {"薛云飞":"任明明","1987.11":"1997.07","5":"5","11":"13","2010.01 党员":"2017.05 团员","2011.06":"2014.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省淮北市濉溪县孙瞳镇任李村三里庙村47号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"17560307500"},
    {"薛云飞":"赵志远","1987.11":"1996.03","5":"5","11":"15","2010.01 党员":"群众","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市濉溪县双堆集镇张集村北头庄24号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"15153315068"},
    {"薛云飞":"梁实秋","1987.11":"1997.11","5":"5","11":"13","2010.01 党员":"群众","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市烈山区杨庄街道二郎庙社区三组92号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13355241929"},
    {"薛云飞":"李聪","1987.11":"1995.11","5":"5","11":"14","2010.01 党员":"2016.06 党员","2011.06":"2015.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省会背诗烈山区烈山镇宁山村一组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"14753388202"},
    {"薛云飞":"李子玉","1987.11":"1993.02","5":"5","11":"14","2010.01 党员":"2016.06 党员","2011.06":"2014.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省淮北市相山区钟楼乡","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"17685684191"},
    {"薛云飞":"蔡传宝","1987.11":"1994.03","5":"5","11":"14","2010.01 党员":"2012.06 党员","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市烈山区人工村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":"13280657283"},
    {"薛云飞":"李泳峰","1987.11":"1998.02","5":"5","11":"13","2010.01 党员":"群众","2011.06":"2017.09","17":"24","25":"31","32":"39","山东省青岛市":"山东省临沂市河东区安居小区35号楼3单元301室","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":""},
    {"薛云飞":"潘凯旋","1987.11":"1997.08","5":"5","11":"12","2010.01 党员":"群众","2011.06":"2017.09","17":"24","25":"31","32":"39","山东省青岛市":"河南省城市蒋口乡洪楼村潘庄","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":""},
    {"薛云飞":"肖利洋","1987.11":"1998.10","5":"5","11":"11","2010.01 党员":"团员","2011.06":"2017.09","17":"24","25":"31","32":"39","山东省青岛市":"山东省东营市广饶县肖家村93号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":""},
    {"薛云飞":"焦裕众","1987.11":"1994.11","5":"5","11":"11","2010.01 党员":"团员","2011.06":"2017.08","17":"22","25":"31","32":"39","山东省青岛市":"山东省淄博市博山区","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"4","1":"1","18706332922":""},
    {"薛云飞":"任明明","1987.11":"1997.07","5":"5","11":"13","2010.01 党员":"2017.05 团员","2011.06":"2014.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省淮北市濉溪县孙瞳镇任李村三里庙村47号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"17560307500"},
    {"薛云飞":"赵志远","1987.11":"1996.03","5":"5","11":"15","2010.01 党员":"群众","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市濉溪县双堆集镇张集村北头庄24号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"15153315068"},
    {"薛云飞":"梁实秋","1987.11":"1997.11","5":"5","11":"13","2010.01 党员":"群众","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市烈山区杨庄街道二郎庙社区三组92号","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"13355241929"},
    {"薛云飞":"李聪","1987.11":"1995.11","5":"5","11":"14","2010.01 党员":"2016.06 党员","2011.06":"2015.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省会背诗烈山区烈山镇宁山村一组","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"14753388202"},
    {"薛云飞":"李子玉","1987.11":"1993.02","5":"5","11":"14","2010.01 党员":"2016.06 党员","2011.06":"2014.09","17":"22","25":"30","32":"39","山东省青岛市":"安徽省淮北市相山区钟楼乡","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"17685684191"},
    {"薛云飞":"蔡传宝","1987.11":"1994.03","5":"5","11":"14","2010.01 党员":"2012.06 党员","2011.06":"2014.09","17":"22","25":"31","32":"39","山东省青岛市":"安徽省淮北市烈山区人工村","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":"13280657283"},
    {"薛云飞":"李泳峰","1987.11":"1998.02","5":"5","11":"13","2010.01 党员":"群众","2011.06":"2017.09","17":"24","25":"31","32":"39","山东省青岛市":"山东省临沂市河东区安居小区35号楼3单元301室","":"","公现役字1112832号":"","2018-08-25":"2018-08-25","admin":"admin","0":"0","4":"1","1":"1","18706332922":""},
]