var styleList = []
var input = document.querySelectorAll("#input input")
for(let i = 0; i < input.length; i++) {
	input[i].addEventListener("input", function() {
		styleList.map(function(node,index){
			if(document.getElementById(i).className == node.location){
			 	document.getElementById(i).setAttribute("style","font-size:"+node.size+"em;"+"color:"+node.color+";")		
			}
		})
		document.getElementById(i).innerHTML = this.value
		
	})
}

document.querySelector(".mui-action-menu").addEventListener("tap", function() { //侧拉点击打开
	mui('.mui-off-canvas-wrap').offCanvas('show');
})

document.querySelector(".push").addEventListener('tap', function(e) { //样式添加
	check()
	show()
})

document.querySelector(".stylelist").addEventListener("tap",function(e){
	if(e.target.type=='button'){
		styleList.splice(e.target.name,1)
		show()
	}
})

function check() {
	var flag = true
	var location = document.querySelector("#location").value
	styleList.map(function(node, index) {
		if(node.location == location) {
			mui.alert("已设置该位置样式", "小问题")
			flag = false
		}
	})
	if(flag) {
		styleList.push({
			"location": document.querySelector("#location").value,
			"size": document.querySelector("#size").value,
			"color": document.querySelector("#color").value
		})
	}
}

function show() {
	document.querySelector(".stylelist>ul").innerHTML = ''
	styleList.map(function(node, index) {
		var styleMap = {
			'left-1': "左一",
			"left-2": "左二",
			"left-3": "左三",
			"right-1": "右一",
			"right-2": "右二",
			"right-3": "右三",
			"2.5": "小",
			"3": "中",
			"3.5": "大"
		}
		var li = document.createElement("li");
		var button = document.createElement("button")
		button.setAttribute("class", "mui-btn mui-btn-danger")
		button.setAttribute("name",index)
		button.setAttribute("type", "button")
		button.innerHTML = "删除"
		li.innerHTML = "位置:" + styleMap[node.location] + " 字号:" + styleMap[node.size] + " 颜色:" + node.color.slice(0, 4)
		li.appendChild(button)
		document.querySelector(".stylelist>ul").appendChild(li)
	})
}