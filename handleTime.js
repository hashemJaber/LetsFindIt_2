export default function handleTime(seconds){
    let secondsSinceEpoch = new Date().getTime() / 1000;
    
    
          const time=Math.floor((secondsSinceEpoch-seconds));
    
        function secondsFactory(seconds){
    if(seconds<0 || !seconds){
      return "No Time Provided"
    }
          if(seconds>59){
          
            return minutesFactory(seconds); //mintues factory
          
          }else return Math.floor(seconds)+" seconds ago";
        
        }
        
        function minutesFactory(seconds){
          let minutes=Math.floor(seconds/60);
          if(minutes>59){
    hoursFactory(minutes);
    }else return minutes+" minutes ago"
        }
          function hoursFactory(minutes){
    
          let hours=Math.floor((minutes/60))
          if(hours>24){
    return daysFactory(hours);
          } else return Math.floor(hours)+" hours ago"
          }
    
          function daysFactory(hours){
    
           let days=Math.floor((hours/24))
           if(days>30){
            return weeksFactory(days);
           }else return Math.floor(days)+" days ago"
            }
    
          function weeksFactory(days){
    let weeks=Math.floor((days/7));
    if(weeks>3){
      return monthsFactory(weeks);
    }else return weeks+" weeks ago";
          }
    function monthsFactory(weeks){
              let months=Math.floor((weeks/4));
              if(months>11){
                return yearsFactory(months);
              }else return Math.floor(months)+" months ago"
              }
    
         function yearsFactory(months){
    
                let years=(Math.floor(months/12))
                return Math.floor(years)+" years ago"
                }   
    
         
         
    return secondsFactory(Math.floor(time));
    }