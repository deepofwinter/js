if($('#banner_left').text().split('\n')[2].trim() == '聊城捷弘物流有限公司(371523198509130020)1') {
	$("#cont").prepend('&nbsp;&nbsp;<input type="checkbox" name="items" id="ckbJumpYzm" />跳过验证码');
	$("#cont").prepend("<button type='button' onclick='btnSplit_Onclick()'>确      定</button>");
	$("#cont").prepend("<textarea cols='80' rows='10' id='infos' />");

	// 修改添加车辆按钮点击事件
	$(".grid3>a").unbind("click");
	$(".grid3>a").click(addTextBox);

	// 修改添加车辆按钮点击事件
	$("#js").unbind("click");
	$("#js").click(onpost_plugin);

	// 我要乘运
	onPost();
}

// 确定按钮
function btnSplit_Onclick(){
	// 获取输入字符串并拆分
	var infosArray = $("#infos").val().trim().split("\n");
	if(infosArray.length > 30) {
		alert("不能多于30车");
		return;
	}
	// 设置车辆输入列表
	var carList = $(".grid1");
	var addCount = infosArray.length - carList.length;
	if(addCount > 0) {
		while(--addCount >= 0) {
			addTextBox();
		}
	} else if(addCount < 0) {
		var carIndex = carList.length;
		while(++addCount <= 0) {
			carList[--carIndex].remove();
		}
	}
	// 获取车辆输入框
	var carnums = $("input[name='carnum']");
	var weights = $("input[name='weight']");
	var telphones = $("input[name='telphone']");
	var cardnumbers = $("input[name='cardnumber']");
	var peizaidates = $("input[name='peizaidate']");
	var intimes = $("select[name='intime']");
	// 设置
	for(var index = 0; index < infosArray.length; index++) {
		var infoArray = infosArray[index].split('\t');
		if(infoArray.length > 0) {
			carnums[index].value = infoArray[0];
		}
		if(infoArray.length > 1) {
			weights[index].value = infoArray[1];
		}
		if(infoArray.length > 2) {
			telphones[index].value = infoArray[2];
		}
		if(infoArray.length > 3) {
			cardnumbers[index].value = infoArray[3];
		}
		if(infoArray.length > 4) {
			peizaidates[index].value = infoArray[4];
		}
		if(infoArray.length > 5) {
			intimes[index].value = infoArray[5];
		}
	}
}

var mycars=new Array("20","18","16","14","12","10","8","6","5","4","3","2","1","0.5");
var idNumber = 1,id="grid";

// 添加车辆
function addTextBox() {
  idNumber++;
  
  label0 = document.createElement("div");
  label0.setAttribute("class","grid1");
  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
   textField.innerHTML="承运车号"+idNumber+"：";
  label0.appendChild(textField);
  
  var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("name","carnum");
  textField.setAttribute("id","carnum"+idNumber);
  textField.setAttribute("class","grid4");
  label0.appendChild(textField);
  
  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
	textField.innerHTML="承运重量"+"：";
  label0.appendChild(textField);
  
   var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("name","weight");
   textField.setAttribute("id","weight"+idNumber);
  textField.setAttribute("class","grid4");
  label0.appendChild(textField);
  
  var textField = document.createElement("div");
  textField.setAttribute("class","clear");
  label0.appendChild(textField);
  
  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
  textField.innerHTML="司机电话：";
  label0.appendChild(textField);
   
   var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("name","telphone");
  textField.setAttribute("id","telphone"+idNumber);
  textField.setAttribute("class","grid4");
  label0.appendChild(textField);
  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
	textField.innerHTML="身份证号"+"：";
  label0.appendChild(textField);
  
   var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("name","cardnumber");
   textField.setAttribute("id","cardnumber"+idNumber);
  textField.setAttribute("class","grid4");
  label0.appendChild(textField);
  
  var textField = document.createElement("div");
  textField.setAttribute("class","clear");
  label0.appendChild(textField);
  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
  textField.innerHTML="到达日期：";
  label0.appendChild(textField);
  
  var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("name","peizaidate");
  textField.setAttribute("id","deliverydateid"+idNumber);
  textField.setAttribute("class","grid4 Wdate");
  textField.setAttribute("onClick","WdatePicker({isShowClear:false,readOnly:true,dateFmt:'yyyy-MM-dd'})");
  label0.appendChild(textField);

  
  var textField = document.createElement("div");
  textField.setAttribute("class","grid6");
  textField.innerHTML="到达时间：";
  label0.appendChild(textField);
  
  
  var textField = document.createElement("select");
  textField.setAttribute("name","intime");
  textField.setAttribute("id","intime"+idNumber);
  textField.setAttribute("class","grid4");	  
  for(var i=0;i<mycars.length;i++){
	  var textFields = document.createElement("option");
	  textFields.setAttribute("value",mycars[i]);
	  if(mycars[i]=='0.5'){
		  textFields.setAttribute("checked","true");}
		  textFields.append(mycars[i])
		  textField.prepend(textFields);
	  }  
  
  label0.appendChild(textField);
 
  var textField = document.createElement("div");
  textField.innerHTML="(小时)";
  label0.appendChild(textField);
  
  var textField = document.createElement("div");
  textField.setAttribute("class","clear");
  label0.appendChild(textField);
  
  var textField2 = document.createElement("input");
  textField2.setAttribute("type","button");
  textField2.setAttribute("name","button");
  textField2.setAttribute("value","删除");
   textField2.setAttribute("class","btndel");
  textField2.onclick=function(){removeTextBox(this)};
  label0.appendChild(textField2);
  
  document.getElementById(id).appendChild(label0);
}

// 删除车辆
function removeTextBox(o) {
  var t=document.getElementById(id).getElementsByTagName("div").length;
  if ( t> 1)  
	document.getElementById(id).removeChild(o.parentNode);
}

// 提交事件
function onpost_plugin(){
	// 不跳过验证码, 直接调用原来的
	if(!$("#ckbJumpYzm").attr("checked")) {
		onpost1();
		return;
	}
	time();
	var sb='1';
	var ispriced='1';
	var gooid='6414870';
	var ss=document.getElementById("tishi");
	var carnumArray=$("input[name='carnum']");
	var telphoneArray=$("input[name='telphone']");
	var peizaidateArray=$("input[name='peizaidate']");
	var weightArray=$("input[name='weight']");
	var cardnumberArray=$("input[name='cardnumber']");
	var intimeArray=$("select[name='intime']");
	var price=$.trim($("#price").val());
	var xtprice=$.trim($("#xtprice").val());
	  var tookd=$("#tookens").val();
	var wei1= $.trim($("#weight").val());
	var goodswei= '5';
	var beizu1=$.trim($("#beizhu").val());
	var typename =$.trim($("#typename").val());
	var goodstype=$.trim($("#goodstype").text());
	var packingtype =$.trim($("#packingtype").text());
	var xjtype=$.trim($("#xjtype").val());
	var nowdate =new Date();
	var sum=0;
	var carnums="";
	var telephones="";
	var cardnumbers="";
	var weights="";
	var tooken=$.trim($("#tookens").val());
	ss.innerHTML='';
	for(var i=0;i<carnumArray.length;i++){
		var carnum= document.getElementById(carnumArray[i].id).value;
		if(""==carnum){
			ss.innerHTML="<font color='red'>车牌号码不能为空！</font>";
			return false;
		}else if(!checkCarnum(carnum)){
			ss.innerHTML="<font color='red'>车牌号码格式不正确！</font>";
			return false;
		}else if(carnums.indexOf(carnum)!=-1){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>车牌号有重复！</font>";
			return false;
		}
		carnums += carnum + ",";
		var weight = document.getElementById(weightArray[i].id).value;
		if (weight*1>35){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>单车载重不能超过35吨！</font>";
			return false;
		}
		if(""==weight){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>载重不能为空！</font>";
			return false;
		}else if(!checkweight(weight)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>载重只能是数字！</font>";
			return false;
		}else if(weight<=0){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>载重需大于0！</font>";
			return false;
		}else if(parseFloat(goodswei)<parseFloat(weight)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>配载重量超重！</font>";
			return false;
		}
		weights += weight + ",";
		sum=parseFloat(sum)+parseFloat(weight);
		if(parseFloat(goodswei)<parseFloat(sum)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>配载重量超重！</font>";
			return false;
		}
		var telphone = document.getElementById(telphoneArray[i].id).value;
		if(""==telphone){
				ss.innerHTML='';
			ss.innerHTML="<font color='red'>手机号码号码不能为空！</font>";
				return false;
		}else if(!checktelephone(telphone)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>手机号码号码格式不正确！</font>";
			return false;
		}else if(telephones.indexOf(telphone)!=-1){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>车牌号有重复！</font>";
			return false;
		}
		telephones+=telephones+",";
		var cardnumber = document.getElementById(cardnumberArray[i].id).value;
		if(""==cardnumber){
				ss.innerHTML='';
			ss.innerHTML="<font color='red'>身份证号码不能为空！</font>";
				return false;
		}else if(cardnumber.length>0&&!checkCardNumber(cardnumber)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>身份证号码格式不正确！</font>";
			return false;
		}else if(cardnumbers.indexOf(cardnumber)!=-1){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>车牌号有重复！</font>";
			return false;
		}
		cardnumbers+=cardnumbers+",";
		var peizaidate = document.getElementById(peizaidateArray[i].id).value;
		if(""== peizaidate){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>到达日期不能为空！</font>";
			return false;
		}else if(peizaidate < nowdate){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>到达日期不能小于现在的日期！</font>";
			return false;
		}
		var intime = document.getElementById(intimeArray[i].id).value;
		if(""== intime){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>到达时间不能为空！</font>";
			return false;
		}		
	}
	if(beizu1.length>120){
		ss.innerHTML="<font color='red'>备注不能大于120字！</font>";
		return false;
	}	 
	if(sb==1&&ispriced=='0'){
		if(price.length==0){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>报价不能为空！</font>";
			return false;
		}else if(!checkprice(price)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>报价只能是整数</font>";
			return false;
		}else if(parseFloat(price)>parseFloat(xtprice)){
			ss.innerHTML='';
			ss.innerHTML="<font color='red'>报价不能大于发布价格</font>";
			return false;
		}
	}
	var ischekmei=true;
		url = "carAction_checkcarame?typename="+encodeURI(encodeURI(typename))+"&packingtype="+encodeURI(encodeURI(packingtype))+"&goodstype="+encodeURI(encodeURI(goodstype))+"&xjtype="+encodeURI(encodeURI(xjtype))+"&weights="+weights+"&carnums="+encodeURI(encodeURI(carnums))+"&goodsid="+gooid;
		$.ajax({
			type : "post",
			url : url,
			async : false,
			success : function(data) {						
				datas=eval('(' + data + ')');
				if (datas.success=="false"){
					ischekmei=false;
					ss.innerHTML="<font color='red'>"+datas.tip+"</font>";
					return false;
				}
			}
		});
	
   if(ischekmei){
	document.getElementById("telphone0").value = hex_md5(document.getElementById("telphone").value+'');
	var isvalidate='N';
	if(isvalidate=='Y'){
		$("#yanzhengma").show();			   
		jQuery.getScript("https://ics-static.obs.cn-north-1.myhuaweicloud.com/1.0.2/resources/js/captcha.min.js",function(){
			var captcha = window.initHWCaptcha({
			ele: document.getElementById("yzm"),
			type: 1, 
			success: function (token) {
			   $("#tookens").val(token);
			   $("#peizaiform").submit(); 
			},
			error: function (error) {
			}
		}); 
			var device_data = ics_client.init();
			console.log(device_data);
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "fregh_prevalidate?goodsid="+$("#goodsid").val()); 
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onload = function () {
			var res = JSON.parse(xhr.response || xhr.responseText);
				captcha.active(res.service_token, res.offline);
			  $(".ics-verify-text").click(); 
			}
			xhr.send(JSON.stringify(device_data));          
		});
		$("#js").hide();
	 }else{
		 $("#peizaiform").submit();
		 // alert('提交数据');
	 }
	}
}
