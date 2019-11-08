
export const Gaussian = (   modelType,
                            stableValue,
                            fireCloudTop,
                            fireRadius,
                            Qt, x, z, H, u) => {
    // *** Things to do (not an all inclusive list, just things I have thought of while coding) ***
    // 1. I have not done anything with unit conversion yet//
    // 
    // 
    // 
    // 4. Need to figure out if this component is going to output any HTML
    // 5. I have not done any verification that the equations are correct
    // (need to add in console.log entries to verify I didn't make any mistakes)
    
    // x = receptor distance
    // Qt = The Source amount. In whichever units selected (Curies or Becquerels)
    // H = The Release Height in meters (if in feet, needs to be converted to meters)
    // u = The Wind Speed in m/s (if in mph, needs to be converted to m/s)
    // z =  Receptor Height in meters (if in feet, needs to be converted to meters)
    // stableValue = A, B, C, D, E, F
    // modelType = General Plume or General Fire
    // fireCloudTop (if in feet, needs to be converted to meters)
    // fireRadius (if in feet, needs to be converted to meters)

    // Test values
    stableValue = 'A';
    modelType = 'General_Plume';
    fireCloudTop = 15;
    fireRadius = 5;
    Qt = 1;
    x = 10;
    z = 10;
    H = 5;
    u = 5;
    let Sy, Sz, C, dy, dz, xy, xz = 0;

    // if general plume selected xy and xz are the same value
    xy = x;
    xz = x;

    if (modelType === 'General_Fire')
    {
        if (fireCloudTop <= 200) {
            H = fireCloudTop / 1.42;
        } else {
            H = fireCloudTop / (0.00224 * fireCloudTop + 0.964);
        }
        // I am confused about this section.
        // ******** Need to talk to Fernando ***********//
        if (stableValue === 'A' || stableValue === 'B' || stableValue === 'C' || stableValue === 'D') {
            if (((1.0 / 3) * H) > fireRadius) {
                fireRadius = (1 / 3) * H;
            }
        }

        Sy = fireRadius / 2;
        Sz = fireRadius / 2;

        let ady, bdy, cdy, adz, bdz, cdz = 0;

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

            dz = Sz / (0.03 - 0.0003 * Sz);
        }
        bdy = 0.0001 * (Sy ** 2);
        cdy = Sy ** 2;
        dy = (bdy + Math.sqrt((bdy ** 2) + 4 * ady * cdy)) / (2 * ady);

        xy = x + dy;
        xz = x + dz;
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
        Sy = (0.11 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.080 * xz) / Math.sqrt(1 + 0.0002 * xz);
    }
    else if (stableValue === 'F')
    {
        Sy = (0.11 * xy) / Math.sqrt(1 + 0.0001 * xy);
        Sz = (0.080 * xz) / Math.sqrt(1 + 0.0002 * xz);
    }

    //Gaussian Equation
    C = (Qt / (2 * Math.PI * Sy * Sz * u)) *
    (Math.exp(-0.5 * Math.pow((z - H) / Sz, 2)) + Math.exp(-0.5 * Math.pow((z + H) / Sz, 2)));
    console.log('The value of C is: ' + C);
    return C;
}