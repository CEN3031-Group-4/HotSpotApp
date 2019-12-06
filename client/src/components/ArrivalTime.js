export const ArrivalTime = (   x,
                               u,
                               receptorUnits,
                               speedUnits
              
                               // x = receptor distance
                               // u = wind speed
) => {

    let arrivalTime;

    if (receptorUnits !== 'm') {
        if (receptorUnits === 'km') {
            x = x * 1000;
        } else if (receptorUnits === 'ft') {
            x = x * 0.3048;
        } else if (receptorUnits === 'miles') {
            // take x, convert it to meters, and re-assign x
            x = x * 1609.34;
        }
    }

    if (speedUnits !== 'm/s'){
        // Converts mph to m/s
        u = u / 2.237;
    }

    arrivalTime = (x / u);

    return arrivalTime;
}
