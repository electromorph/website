	$(function() {
    var select = $( "#mySelectlhs" );
    var selectRH = $( "#mySelectrhs" );
    var locationForScrollbar = $("#lhScrollbar");
    var locationForRHScrollbar = $("#rhScrollbar");
    
	loadImage("http://services.electromorph.com/GetCoupler/true/1.5/true/1.5/5/Picture.png", imageLoaded());
	
	InitializeDropdowns();
	
	var slider = $( "<div id='slider'></div>" ).insertAfter( locationForScrollbar ).slider({
		orientation: "vertical",
		min: 1,
		max: 8,
		range: "min",
		value: select[ 0 ].selectedIndex + 1,
		slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
		DrawConverter();
		}
    });
	$( "#rd1lhs" ).change(function() { slider.slider("option", "max", 8);
	});
	$( "#rd2lhs" ).change(function() { slider.slider( "option", "max", 5);
	});	
	var sliderRH = $( "<div id='sliderRH'></div>" ).insertAfter( locationForRHScrollbar ).slider({
      orientation: "vertical",
      min: 1,
      max: 8,
      range: "min",
      value: selectRH[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        selectRH[ 0 ].selectedIndex = ui.value - 1;
		DrawConverter();
      }
    });
    $( "#mySelectlhs" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );	  
    });
    $( "#mySelectrhs" ).change(function() {
	  sliderRH.slider( "value", this.selectedIndex + 1 );
    });
	$( "#rd1rhs" ).change(function() { sliderRH.slider( "option", "max", 8);
	});
	$( "#rd2rhs" ).change(function() { sliderRH.slider( "option", "max", 5);
	});
  });

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function AddItem(Text,Value,Id)
{
	var x=document.getElementById(Id);
	var option=document.createElement("option");
	option.text=Text;
	option.value=Value;
	try
	{
		x.add(option,x.options[null]);
	}
	catch (e)
	{
		x.add(option,null);
	}
}
function AddMetric(Id)
{
	var x=document.getElementById(Id);
	document.getElementById(Id).options.length = 0;
	AddItem('1.5mm','1.5',Id);
	AddItem('2mm','2',Id);
	AddItem('2.5mm','2.5',Id);
	AddItem('3mm','3',Id);
	AddItem('3.5mm','3.5',Id);
	AddItem('4mm','4',Id);
	AddItem('4.5mm','4.5',Id);
	AddItem('5mm','5',Id);
}
function AddImperial(Id)
{
	var x=document.getElementById(Id);
	document.getElementById(Id).options.length = 0;
	AddItem('1/16"','0.063',Id);
	AddItem('3/32"','0.093',Id);
	AddItem('1/8"','0.125',Id);
	AddItem('5/32"','0.156',Id);
	AddItem('3/16"','0.187',Id);
}

function GetCode(LHSSelected, RHSSelected)
{
	var LHSfloat = parseFloat(LHSSelected);
	var RHSfloat = parseFloat(RHSSelected);
	if (RHSfloat < LHSfloat)
	{ var temp = LHSSelected; LHSSelected = RHSSelected; RHSSelected = temp; }
	
	if (LHSSelected == '1.5' && RHSSelected == '1.5') {return 'EM0012';}
	if (LHSSelected == '1.5' && RHSSelected == '2') {return 'EM0013';}
	if (LHSSelected == '1.5' && RHSSelected == '2.5') {return 'EM0014';}
	if (LHSSelected == '1.5' && RHSSelected == '3') {return 'EM0015';}
	if (LHSSelected == '1.5' && RHSSelected == '3.5') {return 'EM0016';}
	if (LHSSelected == '1.5' && RHSSelected == '4') {return 'EM0017';}
	if (LHSSelected == '1.5' && RHSSelected == '4.5') {return 'EM0018';}
	if (LHSSelected == '1.5' && RHSSelected == '5') {return 'EM0019';}
	if (LHSSelected == '2' && RHSSelected == '2') {return 'EM0020';}
	if (LHSSelected == '2' && RHSSelected == '2.5') {return 'EM0021';}
	if (LHSSelected == '2' && RHSSelected == '3') {return 'EM0022';}
	if (LHSSelected == '2' && RHSSelected == '3.5') {return 'EM0023';}
	if (LHSSelected == '2' && RHSSelected == '4') {return 'EM0024';}
	if (LHSSelected == '2' && RHSSelected == '4.5') {return 'EM0025';}
	if (LHSSelected == '2' && RHSSelected == '5') {return 'EM0026';}
	if (LHSSelected == '2.5' && RHSSelected == '2.5') {return 'EM0027';}
	if (LHSSelected == '2.5' && RHSSelected == '3') {return 'EM0028';}
	if (LHSSelected == '2.5' && RHSSelected == '3.5') {return 'EM0029';}
	if (LHSSelected == '2.5' && RHSSelected == '4') {return 'EM0030';}
	if (LHSSelected == '2.5' && RHSSelected == '4.5') {return 'EM0031';}
	if (LHSSelected == '2.5' && RHSSelected == '5') {return 'EM0032';}
	if (LHSSelected == '3' && RHSSelected == '3') {return 'EM0033';}
	if (LHSSelected == '3' && RHSSelected == '3.5') {return 'EM0034';}
	if (LHSSelected == '3' && RHSSelected == '4') {return 'EM0035';}
	if (LHSSelected == '3' && RHSSelected == '4.5') {return 'EM0036';}
	if (LHSSelected == '3' && RHSSelected == '5') {return 'EM0037';}
	if (LHSSelected == '3.5' && RHSSelected == '3.5') {return 'EM0038';}
	if (LHSSelected == '3.5' && RHSSelected == '4') {return 'EM0039';}
	if (LHSSelected == '3.5' && RHSSelected == '4.5') {return 'EM0040';}
	if (LHSSelected == '3.5' && RHSSelected == '5') {return 'EM0041';}
	if (LHSSelected == '4' && RHSSelected == '4') {return 'EM0042';}
	if (LHSSelected == '4' && RHSSelected == '4.5') {return 'EM0043';}
	if (LHSSelected == '4' && RHSSelected == '5') {return 'EM0044';}
	if (LHSSelected == '4.5' && RHSSelected == '4.5') {return 'EM0045';}
	if (LHSSelected == '4.5' && RHSSelected == '5') {return 'EM0046';}
	if (LHSSelected == '5' && RHSSelected == '5') {return 'EM0047';}
	if (LHSSelected == '0.063' && RHSSelected == '0.063') {return 'EM0048';}
	if (LHSSelected == '0.063' && RHSSelected == '0.093') {return 'EM0049';}
	if (LHSSelected == '0.063' && RHSSelected == '0.125') {return 'EM0050';}
	if (LHSSelected == '0.063' && RHSSelected == '0.156') {return 'EM0051';}
	if (LHSSelected == '0.063' && RHSSelected == '0.187') {return 'EM0052';}
	if (LHSSelected == '0.093' && RHSSelected == '0.093') {return 'EM0053';}
	if (LHSSelected == '0.093' && RHSSelected == '0.125') {return 'EM0054';}
	if (LHSSelected == '0.093' && RHSSelected == '0.156') {return 'EM0055';}
	if (LHSSelected == '0.093' && RHSSelected == '0.187') {return 'EM0056';}
	if (LHSSelected == '0.125' && RHSSelected == '0.125') {return 'EM0057';}
	if (LHSSelected == '0.125' && RHSSelected == '0.156') {return 'EM0058';}
	if (LHSSelected == '0.125' && RHSSelected == '0.187') {return 'EM0059';}
	if (LHSSelected == '0.156' && RHSSelected == '0.156') {return 'EM0060';}
	if (LHSSelected == '0.156' && RHSSelected == '0.187') {return 'EM0061';}
	if (LHSSelected == '0.187' && RHSSelected == '0.187') {return 'EM0062';}
	if (LHSSelected == '1.5' && RHSSelected == '0.063') {return 'EM0063';}
	if (LHSSelected == '1.5' && RHSSelected == '0.093') {return 'EM0071';}
	if (LHSSelected == '1.5' && RHSSelected == '0.125') {return 'EM0079';}
	if (LHSSelected == '1.5' && RHSSelected == '0.156') {return 'EM0087';}
	if (LHSSelected == '1.5' && RHSSelected == '0.187') {return 'EM0095';}
	if (LHSSelected == '2' && RHSSelected == '0.063') {return 'EM0064';}
	if (LHSSelected == '2' && RHSSelected == '0.093') {return 'EM0072';}
	if (LHSSelected == '2' && RHSSelected == '0.125') {return 'EM0080';}
	if (LHSSelected == '2' && RHSSelected == '0.156') {return 'EM0088';}
	if (LHSSelected == '2' && RHSSelected == '0.187') {return 'EM0096';}
	if (LHSSelected == '2.5' && RHSSelected == '0.063') {return 'EM0065';}
	if (LHSSelected == '2.5' && RHSSelected == '0.093') {return 'EM0073';}
	if (LHSSelected == '2.5' && RHSSelected == '0.125') {return 'EM0081';}
	if (LHSSelected == '2.5' && RHSSelected == '0.156') {return 'EM0089';}
	if (LHSSelected == '2.5' && RHSSelected == '0.187') {return 'EM0097';}
	if (LHSSelected == '3' && RHSSelected == '0.063') {return 'EM0066';}
	if (LHSSelected == '3' && RHSSelected == '0.093') {return 'EM0074';}
	if (LHSSelected == '3' && RHSSelected == '0.125') {return 'EM0082';}
	if (LHSSelected == '3' && RHSSelected == '0.156') {return 'EM0090';}
	if (LHSSelected == '3' && RHSSelected == '0.187') {return 'EM0098';}
	if (LHSSelected == '3.5' && RHSSelected == '0.063') {return 'EM0067';}
	if (LHSSelected == '3.5' && RHSSelected == '0.093') {return 'EM0075';}
	if (LHSSelected == '3.5' && RHSSelected == '0.125') {return 'EM0083';}
	if (LHSSelected == '3.5' && RHSSelected == '0.156') {return 'EM0091';}
	if (LHSSelected == '3.5' && RHSSelected == '0.187') {return 'EM0099';}
	if (LHSSelected == '4' && RHSSelected == '0.063') {return 'EM0068';}
	if (LHSSelected == '4' && RHSSelected == '0.093') {return 'EM0076';}
	if (LHSSelected == '4' && RHSSelected == '0.125') {return 'EM0084';}
	if (LHSSelected == '4' && RHSSelected == '0.156') {return 'EM0092';}
	if (LHSSelected == '4' && RHSSelected == '0.187') {return 'EM0100';}
	if (LHSSelected == '4.5' && RHSSelected == '0.063') {return 'EM0069';}
	if (LHSSelected == '4.5' && RHSSelected == '0.093') {return 'EM0077';}
	if (LHSSelected == '4.5' && RHSSelected == '0.125') {return 'EM0085';}
	if (LHSSelected == '4.5' && RHSSelected == '0.156') {return 'EM0093';}
	if (LHSSelected == '4.5' && RHSSelected == '0.187') {return 'EM0101';}
	if (LHSSelected == '5' && RHSSelected == '0.063') {return 'EM0070';}
	if (LHSSelected == '5' && RHSSelected == '0.093') {return 'EM0078';}
	if (LHSSelected == '5' && RHSSelected == '0.125') {return 'EM0086';}
	if (LHSSelected == '5' && RHSSelected == '0.156') {return 'EM0094';}
	if (LHSSelected == '5' && RHSSelected == '0.187') {return 'EM00102';}
	return 'EM0010';
}

function DrawConverter()
{
	var mySelectlhs = document.getElementById('mySelectlhs');
	var mySelectrhs = document.getElementById('mySelectrhs');
	var LHSSelected = mySelectlhs.options[mySelectlhs.selectedIndex].value;
	var RHSSelected = mySelectrhs.options[mySelectrhs.selectedIndex].value;
	var LHSSelectedText = mySelectlhs.options[mySelectlhs.selectedIndex].text;
	var RHSSelectedText = mySelectrhs.options[mySelectrhs.selectedIndex].text;
	var LHSIsMetric = document.getElementById("rd1lhs").checked;
	var RHSIsMetric = document.getElementById("rd1rhs").checked;
	loadImage("http://services.electromorph.com/GetCoupler/"+LHSIsMetric+"/"+LHSSelected+"/"+RHSIsMetric+"/"+RHSSelected+"/5/Picture.png", imageLoaded());
	var quantity = document.getElementById("qty").value;
	var price = GetPrice(LHSSelected, LHSIsMetric, RHSSelected, RHSIsMetric, quantity);
	document.getElementById("priceText").innerHTML = price;
	var desc = "8mm Aluminium Shaft Coupler joining " + LHSSelectedText + " to " + RHSSelectedText;
	var productCode = GetCode(LHSSelected,RHSSelected);
	document.getElementById("description").innerHTML = desc;
	document.getElementById("BuyNowButton").href = 'http://www.romancart.com/cart.asp?itemname2='+desc+'&itemcode='+productCode+'&storeid=20772&quantity='+quantity;
}

function InitializeDropdowns()
{
	var ld = getUrlVars()["ld"];
	var lu = getUrlVars()["lu"];
	var rd = getUrlVars()["rd"];
	var ru = getUrlVars()["ru"];
	if (lu != null)
	{
	  if (lu == "i")
	  {
		AddImperial('mySelectlhs');
		$('#rd2lhs').attr('checked', 'checked');
	  }
	  else
	  {
		AddMetric('mySelectlhs');
	  }
	}
	else
	{
		AddMetric('mySelectlhs');
	}
	if (ld != null)
	{
	  $("#mySelectlhs").val(ld);
	}
	if (ru != null)
	{
	  if (ru == "i")
	  {
		AddImperial('mySelectrhs');
		$('#rd2rhs').attr('checked', 'checked');
	  }
	  else
	  {
	  AddMetric('mySelectrhs');
	  }
	}
	else
	{
		AddMetric('mySelectrhs');
	}
	if (rd != null)
	{
	$("#mySelectrhs").val(rd);
	}
		document.getElementById('imgConverter').onload="";
	if ((rd != null) || (ru != null) || (ld != null) || (lu != null) )
	{
		DrawConverter();
	}
}

function GetPrice(LHSAmount, LHSMetric, RHSAmount, RHSMetric, Quantity)
{
	if (LHSMetric==false)
	{
		LHSAmount = LHSAmount * 25.4;
	}
	if (RHSMetric==false)
	{
		RHSAmount = RHSAmount * 25.4;
	}
	var largestDimension = 0.0;
	if (LHSAmount > RHSAmount)
	{
		largestDimension = LHSAmount;
	}
	else
	{
		largestDimension = RHSAmount;
	}
	var price=2.99;
	if (largestDimension <= 10)
	{
		price =2.99;
	}
	else if (largestDimension <= 14)
	{
		price=2.99;
	}
	else
	{
		price=2.99;
	}
	if (Quantity >= 2 && Quantity <= 5)
	{
		price = price - 1.00;
	}
	if (Quantity >= 6 && Quantity <50)
	{
		price = price - 1.50;
	}
        else if (Quantity >= 50)
        {
                price = price - 2;
        }
	return price.toFixed(2);
}

function loadImage(src, functionToRun)
{
	var converter = document.getElementById('imgConverter');
	$('#spinnerDiv').show();
    $('#converterDiv').hide();
	converter.onload = imageLoaded();
	converter.src = src;
}

function imageLoaded()
{
	$('#converterDiv').show();
	$('#spinnerDiv').hide();
}
