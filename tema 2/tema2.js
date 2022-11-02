

function showresult(choise){
let n1=parseFloat(document.getElementById('number1').value);
let n2=parseFloat(document.getElementById('number2').value);
let r;
let c=choise;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4': 
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;
	default:
		break;
			
	}
document.getElementById('result').value=r;

	

}