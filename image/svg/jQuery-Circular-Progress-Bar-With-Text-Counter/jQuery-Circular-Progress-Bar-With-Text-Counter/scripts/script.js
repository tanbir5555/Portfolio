$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 20,
        color: "#5000ff",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "More power behind every pixel",
      
    }).circularProgress('animate', 75, 1000);
});
