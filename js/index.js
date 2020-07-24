// 获取GetQueryString('usercode')
var url = "http://192.168.4.132:9081";
var propk = "";//项目pk
var stage = "";//阶段
var stagepk = "";//阶段pk
var text = "";//类型

// 获取usercode
var userCode = GetQueryString('usercode');
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

window.onload = function () {
    // 下拉默认
    // $(".selectpicker1").selectpicker({
    //     title: "请输入"
    // });

    // $(".selectpicker2").selectpicker({
    //     title: "请输入"
    // });
    // 获取项目名称
    $.ajax({
        url: url + "/service/security?method=projects&user_code=" + "lipeng",
        type: 'get',
        dataJson: 'json',
        success: function (data) {
            var json = eval('(' + data + ')');
            console.log(json)
            var arr = json.data;
            for (var i = 0; i < arr.length; i++) {
            	var option = document.createElement("option");
            	// $("#projectType").prepend("<option value='0'>请选择</option>")
            	$("#projectType").append("<option value='" + arr[i].pk + "'>" + arr[i].name + "</option>");
            }
            // //使用refresh方法更新UI以匹配新状态。
            // $('.selectpicker1').selectpicker('refresh');
            // //render方法强制重新渲染引导程序 - 选择ui。
            // $('.selectpicker1').selectpicker('render');
        }

    });
    $('.selectpicker1').on('change',function(){
        console.log($(".selectpicker1").val())
    })
    // //获取到selectpicker1
    // $('.selectpicker1').on('shown.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    //     console.log($(".selectpicker1").val())
    // 	console.log(clickedIndex, isSelected, previousValue, "获取到的值")
    // 	// propk = $(".selectpicker1").val();
    // 	// console.log(propk)
    // 	// selcont()
    // });

    // // propk = $(".selectpicker1").val();
    // // console.log(propk)
    // //获取项目阶段的数据 
    // function selcont() {
    // 	// console.log(v)
    // 	propk = $(".selectpicker1").val();
    // 	console.log(propk)
    // 	$.ajax({
    // 		url: url + "/service/security?method=kl&project=" + v,
    // 		type: 'get',
    // 		dataJson: 'json',
    // 		success: function (data) {
    // 			var data = JSON.parse(data)
    // 			var arr = data.data;
    // 			// console.log(arr)
    // 			for (var i = 0; i < arr.length; i++) {
    // 				var obj = arr[i].info;
    // 				var stagepk = arr[i].stagepk;
    // 				// console.log(obj,stagepk)
    // 				var option = document.createElement("option");
    // 				$(".selectpicker2").append("<option value='" + arr[i].stage + "'>" + arr[i].stage + "</option>");
    // 				selright(obj, stagepk)
    // 			}
    // 			//使用refresh方法更新UI以匹配新状态。
    // 			$('.selectpicker2').selectpicker('refresh');
    // 			//render方法强制重新渲染引导程序 - 选择ui。
    // 			$('.selectpicker2').selectpicker('render');
    // 		}

    // 	});
    // }
    // function selright(obj, stagepk) {
    // 	//获取到selectpicker2的值
    // 	$('.selectpicker2').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    // 		stage = $(".selectpicker2").val();
    // 		// console.log(stage, "获取到的值.并且在这里左边数据渲染")
    // 		// 树左侧数据
    // 		$('#treeview11').treeview({
    // 			color: "#428bca",
    // 			data: obj,
    // 			nodeIcon: '',//自定义图标
    // 			onNodeSelected: function (event, node) {
    // 				// console.log(node.text)
    // 				bottomcont(node.kls, node.text, stagepk)
    // 				// $('#event_output').prepend('<p>您单击了 ' + node.text + '</p>');
    // 			}
    // 		});
    // 	});
    // }
    // ///弹窗效果//

    // //关闭X
    // $('.idel').click(function () {
    // 	$('.mask').addClass('hide');
    // })

    // //生成报告
    // $(".produce").on("click", function () {
    // 	console.log('生成报告')
    // })

    // //下载
    // $(".down").on("click", function () {
    // 	console.log('下载')
    // })
    // // prompt_sure
    // function bottomcont(list, text, stagepk) {
    // 	text = text;
    // 	// console.log(propk,stage,stagepk,text)
    // 	var userTableStr = '';
    // 	for (var i = 0; i < list.length; i++) {
    // 		// console.log(list[i].type)
    // 		userTableStr += '<tr><td>' + list[i].type + '</td><td>' + list[i].name + '</td><td class="radioList" id=' + list[i].name + i + '><label class="radio-inline"><input type="radio" name=' + list[i].pk + ' value="1"><span>1</span></label><label class="radio-inline"><input type="radio" name=' + list[i].pk + ' value="2">2</label><label class="radio-inline"><input type="radio" name=' + list[i].pk + ' value="3">3</label><label class="radio-inline"><input type="radio" name=' + list[i].pk + ' value="4">4</label><label class="radio-inline"><input type="radio" name=' + list[i].pk + ' value="5">5</label></td></tr>';
    // 	}
    // 	$('#tables>tbody').html(userTableStr);
    // 	//开始计算
    // 	$('.calculate').unbind('click').click(function () {
    // 		console.log('开始计算');
    // 		var count = 0;
    // 		var trs = $("#tables tbody tr");
    // 		$.each(trs, function (key, val) {
    // 			var num = $(val).find('input:checked').val();
    // 			list[key].num = num;
    // 			list[key].propk = propk;
    // 			list[key].stage = stage;
    // 			list[key].stagepk = stagepk;
    // 			// list[key].text=text;
    // 			if (!list[key].num) {
    // 				count += 1
    // 			}
    // 		});
    // 		// console.log(count)
    // 		if (count) {
    // 			$('.prompt_text').text('还没答完！');
    // 			// $('.prompt_sure').click(function () {
    // 			// 	$('.mask').addClass('hide');
    // 			// })
    // 		} else {
    // 			console.log(list);
    // 			$.ajax({
    // 				url: url + "/service/resistancemark",
    // 				type: 'post',
    // 				dataJson: 'json',
    // 				data: JSON.stringify(list),
    // 				success: function (res) {
    // 					// console.log(res)
    // 				}
    // 			});
    // 			$('.prompt_text').text('现在开始计算分数~');
    // 		}
    // 		// console.log($('.prompt_text').text())
    // 		if ($('.prompt_text').text() == "还没答完！") {
    // 			$('.mask').addClass('hide');
    // 		} else {
    // 			$('.mask').addClass('hide');
    // 			// location.href = "demo.html"
    // 			$('.prompt_sure').click(function () {
    // 				$('.mask').addClass('hide');
    // 				location.href = "result.html"
    // 			})
    // 		}
    // 		$('.mask').removeClass('hide');//btns
    // 	})
    // }

}

//打分默认禁用
// $('#tables>tbody>tr>.radioList>.radio-inline>input').attr("disabled", "disabled")