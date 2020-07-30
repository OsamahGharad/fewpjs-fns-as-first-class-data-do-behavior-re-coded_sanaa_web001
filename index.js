/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
   let hour=parseInt(time);
  swich(hour){
    morningTime =hour<12;
    afternoonTime=hour>=12 && hour<=17;
    eveningTime=hour>17 && hour<=24;
    
    case morningTime :
    return "Good Morning";

      break;
      case afternoonTime:
        return "Good Afternoon";
        break;
        case eveningTime:
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
