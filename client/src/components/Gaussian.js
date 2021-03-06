
export const Gaussian = (   modelType,
                            stableValue,
                            fireCloudTop,
                            fireRadius,
                            Qt, x, z, H, u,
                            distanceUnits,
                            speedUnits,
                            receptorUnits,
                        ) => {
    
    // x = receptor distance
    // Qt = The Source amount. In whichever units selected (Curies or Becquerels)
    // H = The Release Height in meters (if in feet, needs to be converted to meters)
    // u = The Wind Speed in m/s (if in mph, needs to be converted to m/s)
    // z =  Receptor Height in meters (if in feet, needs to be converted to meters)
    // stableValue = A, B, C, D, E, F
    // modelType = General Plume or General Fire
    // fireCloudTop (if in feet, needs to be converted to meters)
    // fireRadius (if in feet, needs to be converted to meters)

    let Sy, Sz, C, dy, dz, xy, xz;

    /**
     * Conversions
     */
    //console.log('Receptor unit before conversion: ', x);
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
    //console.log('Receptor unit after conversion: ', x);

    //console.log('Release height before conversion', H);
    if (distanceUnits !== 'm'){
        if(modelType === 'General_Plume'){
            // Converts ft to m
            H = H * 0.3048;
            z = z * 0.3048;
        }
        if(modelType === 'General_Fire'){
            // Converts ft to m
            fireCloudTop = fireCloudTop * 0.3048;
            fireRadius = fireRadius * 0.3048;
            z = z * 0.3048;
        }
    }
    //console.log('Release height after conversion', H);

    //console.log('Wind speed before conversion:', u);
    if (speedUnits !== 'm/s'){
        // Converts mph to m/s
        u = u / 2.237;
    }
    //console.log('Wind speed after conversion:', u);

    // if general plume selected xy and xz are the same value
    xy = parseFloat(x); //xy = x + dy (dy = 0 for General Plume)
    xz = parseFloat(x); //xz = x + dz (dz = 0 for General Plume)

    if (modelType === 'General_Fire')
    {
        if (fireCloudTop <= 200) {
            H = fireCloudTop / 1.42;
        } else {
            H = fireCloudTop / (0.00224 * fireCloudTop + 0.964);
        }
        
        if (stableValue === 'A' || stableValue === 'B' || stableValue === 'C' || stableValue === 'D') {
            if (((1.0 / 3) * H) > fireRadius) {
                fireRadius = (1 / 3) * H;
            }
        }
        //console.log('H = ' + H);
        //console.log('fireRadius = ' + fireRadius);

        Sy = fireRadius / 2;
        Sz = fireRadius / 2;

        let ady, bdy, cdy, adz, bdz, cdz;

        if (stableValue === 'A')
        {
            ady = 0.22 ** 2;

            dz = Sz / 0.20;
        }
        else if (stableValue === 'B')
        {
            ady = 0.16 ** 2;

            dz = Sz / 0.12;
        }
        else if (stableValue === 'C')
        {
            ady = 0.11 ** 2;

            adz = 0.08 ** 2;
            bdz = 0.0002 * (Sy ** 2);
            cdz = Sz ** 2;
            dz = (bdz + Math.sqrt((bdz ** 2) + 4 * adz * cdz)) / (2 * adz);
        }
        else if (stableValue === 'D')
        {
            ady = 0.08 ** 2;

            adz = 0.06 ** 2;
            bdz = 0.0015 * (Sy ** 2);
            cdz = Sz ** 2;
            dz = (bdz + Math.sqrt((bdz ** 2) + 4 * adz * cdz)) / (2 * adz);
        }
        else if (stableValue === 'E')
        {
            ady = 0.06 ** 2;

            dz = Sz / (0.03 - 0.0003 * Sz);
        }
        else if (stableValue === 'F')
        {
            ady = 0.04 ** 2;

            dz = Sz / (0.016 - 0.0003 * Sz);
        }
        
        bdy = 0.0001 * (Sy ** 2);
        cdy = Sy ** 2;
        /*
        console.log('ady = ' + ady);
        console.log('bdy = ' + bdy);
        console.log('cdy = ' + cdy);
        console.log('adz = ' + adz);
        console.log('bdz = ' + bdz);
        console.log('cdz = ' + cdz);
        */
        dy = (bdy + Math.sqrt((bdy ** 2) + 4 * ady * cdy)) / (2 * ady);

        //console.log('dy = ' + dy);
        //console.log('dz = ' + dz);
        
        xy = parseFloat(x) + dy;
        xz = parseFloat(x) + dz;

        //console.log('xy = ' + xy)
        //console.log('xz = ' + xz)
    }
    // The remaining equations are the same for General Fire or General Plume
    if (stableValue === 'A')
    {
        Sy = (0.22 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.20 * xz);
    }
    else if (stableValue === 'B')
    {
        Sy = (0.16 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.12 * xz);
    }
    else if (stableValue === 'C')
    {
        Sy = (0.11 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.080 * xz) / Math.sqrt(1 + 0.0002 * xz);
    }
    else if (stableValue === 'D')
    {
        Sy = (0.08 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.060 * xz) / Math.sqrt(1 + 0.0015 * xz);
    }
    else if (stableValue === 'E')
    {
        Sy = (0.06 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.030 * xz) / (1 + 0.0003 * xz);
    }
    else if (stableValue === 'F')
    {
        Sy = (0.04 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.016 * xz) / (1 + 0.0003 * xz);
    }
    //console.log('Sy = ' + Sy);
    //console.log('Sz = ' + Sz);

    C = (Qt / (2 * Math.PI * Sy * Sz * u)) *
    (Math.exp(-0.5 * Math.pow((z - H) / Sz, 2)) + Math.exp(-0.5 * Math.pow((parseFloat(z) + parseFloat(H)) / Sz, 2)));
    //console.log('The value of C is: ' + C);
    return C;
}