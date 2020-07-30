/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  hour=parseInt(time);
  swich(houre){
    case hour<12:
    return "Good Morning";
      
      break;
      case hour>=12 && hour<=17:
        return "Good Afternoon";
        break;
        case hour>17 && hour<=24:
        return "Good Evening"
          
          break;
          default:
          return:"not a good format";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message){
  const greeting =document.querySelector('#greeting');
  greeting.innerText=message;
}

