function posToCanvas(s){
    // place box on the top edge of ramp
    return {
        x: topLeftPx.x + t_down.x*s*pixelsPerMeter + n.x*boxSizeM*pixelsPerMeter/2,
        y: topLeftPx.y + t_down.y*s*pixelsPerMeter + n.y*boxSizeM*pixelsPerMeter/2
    };
}
