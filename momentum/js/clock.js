showTime() {
    setTimeout(showTime, 1000);  
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = "Text";

}
showTime();

showDate() {
     
    const date = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'}

    const currentDate = date.toLocaleDateString('en-US', options);
    date.textContent = currentDate;

}
showDate();



getTimeofDay() {
    const greeting = document.querySelector('.greeting');
    const greetingDay = New Date();
    const hours = greetingDay.getHours();

        if (hours <= 5) {
            return (hours = "night");
        } else if (hours <= 11) {
            return (hours = "morning");
        } else if (hours <= 17) {
            return (hours = "afternoon");
        } else  {
        return (hours = "evening");
        }
}

greeting.textContent = `Good ${getTimeofDay()}`
  
getTimeofDay(hours);  





