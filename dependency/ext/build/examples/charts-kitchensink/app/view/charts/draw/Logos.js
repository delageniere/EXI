Ext.define('ChartsKitchenSink.view.charts.draw.Logos', function() {
    var gradient;

    // Need to use unique gradient ids for FF
    function getGradient() {
        var id = Ext.id();
        gradient = {
            id: id,
            angle: 90,
            stops: {
                0: {
                    color: 'rgb(33, 33, 33)'
                },
                100: {
                    color: 'rgb(156, 178, 248)'
                }
            }
        };
        return gradient;
    }

    function getFill() {
        return 'url(#' + gradient.id + ')';
    }
    
    return {
        extend: 'Ext.window.Window',
        xtype: 'logos-draw',
    
        // <example>
        // Content between example tags is omitted from code preview.
        bodyStyle: 'background: transparent !important',

        layout: {
            type: 'vbox',
            pack: 'center'
        },

        exampleDescription: [
            'This example shows how to create SVG images using Ext JS Draw component'
        ],
        // </example>
    
        title: 'Draw Components',
        width: 600,
        height: 400,
        border: false,
        maximizable: true,
        constrain: true,
        closable: false,
        layout: 'fit',
    
        resizable: {
            dynamic: true
        },
    
        items: [{
            xtype: 'tabpanel',
            defaultType: 'draw',
        
            items: [{
                title: 'Chrome',
                viewBox: true,
                gradients: [getGradient()],
                items: [{
                    type: 'path',
                    path: 'M,162.77,86.55,c,-28.79,0,-52.27,21.81,-52.27,48.54,s,23.48,48.54,52.27,48.54,c,28.79,0,52.27,-21.81,52.27,-48.54,S,191.56,86.55,162.77,86.55,z,M,295.35,134.86,c,-3.69,-18.19,-10.68,-30.52,-17.27,-39.95,c,0.5,1.29,0.9,2.59,1.38,3.88,c,-23.4,-63.55,-117.04,-98,-189.37,-54.3,c,-0.56,2.7,-0.73,5.38,-0.73,8.04,c,0,-0.51,-0.06,-0.98,-0.04,-1.5,c,-17.43,-1.34,-38.54,20.61,-57.31,60.83,c,-9.53,22.77,-12.98,47.7,-4.14,76.93,c,5.16,17.06,13.28,34.56,24.99,48.14,c,34.71,40.27,87.88,56.7,118.84,48.35,c,0.04,0.01,0.09,0.03,0.14,0.04,c,59.69,-1.25,104.94,-42.28,121.25,-95.69,C,298.96,170.35,299.34,154.57,295.35,134.86,z,M,60.43,230.4,c,-9.6,-11.12,-17.55,-26.51,-22.99,-44.52,c,-7.33,-24.2,-6.12,-46.5,3.79,-70.15,C,51.29,94.2,61.11,80.05,69.56,71.54,c,1.5,7.42,5.21,16.28,11.13,26.49,c,2.18,3.79,4.59,7.01,6.92,10.12,c,1.79,2.37,3.56,4.74,5.13,7.29,c,1.24,2.02,2.39,4.45,3.54,7.37,c,-2.39,27.54,8.92,51.38,31.48,66.79,l,-25.46,22.5,l,-2.02,1.71,c,-2.08,1.71,-4.47,3.73,-6.51,5.89,c,-13.6,14.44,-2.5,28.31,2.86,34.98,l,0.68,0.87,c,2.37,2.97,5.13,6.2,8.15,9.38,C,89.63,257.25,73.75,245.85,60.43,230.4,z,M,283.54,186.7,c,-16,52.32,-59.37,87,-110.7,88.59,c,-24.85,-5.83,-43.62,-17.8,-55.86,-35.57,c,0.04,-0.04,0.1,-0.08,0.15,-0.13,l,49.44,-38.36,c,22.26,-1.24,38.54,-8.88,48.47,-22.78,c,12.22,-14.12,17.92,-30.25,16.93,-48.61,c,18.17,3.77,33.89,9.03,48.55,18.83,l,1.16,0.78,l,1.34,0.43,c,1.56,0.49,3.11,0.76,4.59,0.81,C,288.7,163.09,287.4,174.02,283.54,186.7,z,M,286.09,140.37,c,-19.51,-13.06,-40.63,-18.67,-65.94,-22.85,c,5.31,23.58,-0.84,40.72,-13.26,55.12,c,-8.82,12.35,-23.82,18.22,-43.94,18.75,l,-52.2,40.51,c,-4.97,4.09,-5.91,8.19,-2.82,12.29,c,8.49,12.77,19.29,22.02,31.22,28.78,c,-0.13,0,-0.26,0.02,-0.39,0.03,c,-0.01,-0.01,-0.04,-0.02,-0.06,-0.04,c,-0.2,0.03,-0.41,0.04,-0.62,0.05,c,-0.8,0.01,-1.6,-0.01,-2.39,-0.1,c,-1.56,-0.21,-3.14,-0.64,-4.59,-1.18,c,-8.98,-3.33,-18.9,-13.52,-25.97,-22.39,c,-5.81,-7.3,-12.06,-14.33,-4.11,-22.75,c,2.58,-2.73,5.82,-5.14,7.89,-6.98,l,25.21,-22.29,c,1.72,-1.37,3.5,-2.77,5.35,-4.23,c,0.53,-0.42,1.07,-0.84,1.62,-1.27,c,5.64,-4.42,4.83,-3.2,-1.08,-6.42,c,-24.19,-13.2,-36.77,-36.14,-33.54,-63.89,c,-1.49,-4.1,-3.17,-7.92,-5.18,-11.24,c,-3.63,-6,-8.34,-11.02,-11.94,-17.23,c,-9,-15.56,-18.47,-39.02,0.13,-36.82,c,-0.05,-0.53,-0.02,-1.1,-0.05,-1.64,c,0.94,20.01,15.26,38.23,17.42,48.88,c,0.78,3.82,2.94,7.05,6.12,2.8,c,25.38,-33.95,60.69,-30.53,83.28,-13.12,c,4.43,3.4,6.84,7.55,10.84,11.1,c,1.54,1.38,3.28,2.59,5.35,3.51,c,7.43,3.32,18.07,3.12,26.07,4.34,c,13.71,2.08,27.07,4.64,39.71,8.12,c,2.5,0.3,4.24,-0.04,5.21,-1.01,c,2.11,-2.08,-0.02,-8.87,-1.21,-12.63,c,2.77,8.05,5.36,16.09,7.73,24.15,C,291.76,137.01,291.33,142.08,286.09,140.37,z',
                    fill: getFill()
                }]
            }, {
                title: 'Firefox',
                viewBox: true,
                gradients: [getGradient()],
                items: [{
                    type: 'path',
                    path: 'M,284,224.69,c,4.79,-9.64,8.51,-19.91,10.95,-30.66,c,9.53,-36.61,6.66,-68.54,6.66,-68.54,l,-3.27,21.04,c,0,0,-4.69,-38.96,-10.44,-53.53,c,-8.81,-22.31,-12.73,-22.14,-12.74,-22.1,c,5.42,13.79,4.94,21.69,4.83,22.88,c,-0.1,-0.16,-0.19,-0.32,-0.27,-0.47,c,-1.31,-3.24,-7.97,-18.19,-22.25,-28.78,c,-25.02,-24.81,-59.43,-40.15,-97.45,-40.15,c,-40.56,0,-77.05,17.45,-102.38,45.25,C,54.44,65,51.83,59.38,51.59,53.17,c,0,0,-0.02,0.02,-0.06,0.05,c,0,-0.11,-0.03,-0.21,-0.03,-0.31,c,0,0,-16.1,12.47,-14.36,46.12,c,-2.99,5.74,-5.6,11.72,-7.77,17.91,c,-3.75,8.17,-7.5,20.04,-10.59,37.46,c,0,0,1.33,-4.22,3.99,-9.88,c,-0.64,4.82,-1.03,9.71,-1.16,14.67,c,-0.9,8.45,-1.18,18.65,-0.39,30.88,c,0,0,0.32,-4.06,1.36,-10.21,c,8.34,68.54,66.67,121.65,137.43,121.65,l,0,0,c,18.6,0,36.36,-3.7,52.56,-10.36,C,249.38,277.71,271.16,251.96,284,224.69,z,M,160.01,33.56,c,24.46,0,47.3,6.8,66.8,18.6,c,-22.74,-5.28,-34.33,-2.61,-34.23,-2.48,c,0.13,0.15,33.84,5.89,39.81,14.11,c,0,0,-14.31,0,-28.56,4.1,c,-0.65,0.19,52.42,6.63,63.27,59.66,c,0,0,-5.82,-12.13,-13.01,-14.2,c,4.73,14.39,3.51,41.7,-1,55.28,c,-0.58,1.74,-1.18,-7.55,-10.04,-11.55,c,2.84,20.37,-0.18,52.68,-14.32,61.58,c,-1.09,0.7,8.87,-31.89,2.01,-19.3,c,-40.93,62.76,-89.59,25.39,-109.34,12.08,c,15.85,3.88,32.67,1.08,42.42,-5.59,c,9.82,-6.72,15.64,-11.62,20.87,-10.47,c,5.22,1.17,8.7,-4.07,4.64,-8.72,c,-4.05,-4.66,-13.92,-11.05,-27.25,-7.57,c,-9.4,2.47,-21.07,12.87,-38.86,2.33,c,-15.18,-8.99,-15.07,-16.3,-15.07,-20.95,c,0,-3.66,2.57,-8.8,7.34,-10.28,c,5.8,0.62,10.44,2.14,15.37,4.66,c,0.05,-1.35,0.06,-3.15,-0.01,-5.19,c,0.39,-0.77,0.15,-3.11,-0.47,-5.96,c,-0.36,-2.87,-0.97,-5.82,-1.9,-8.51,c,0.1,-0.02,0.17,-0.07,0.21,-0.21,c,0.76,-3.44,21.47,-15.44,22.99,-16.59,c,1.53,-1.14,5.5,-3.78,5.06,-11.83,c,-0.15,-2.65,-0.58,-2.94,-22.32,-2.86,c,-9.17,0.03,-14.25,-8.94,-15.89,-12.45,c,2.22,-12.31,8.63,-21.1,19.19,-27.04,c,0.2,-0.11,0.15,-0.21,-0.08,-0.27,c,2.19,-1.27,-25.24,-0.06,-37.6,16.04,C,96.74,80.45,92.19,79.5,87.1,79.5,c,-6.38,0,-11.39,0.7,-16.03,1.87,c,-0.5,0.13,-1.22,0.11,-2.08,-0.01,C,67.69,80.39,65.75,78.8,63.65,76.72,c,1.61,-1.8,3.24,-3.56,4.95,-5.26,C,92.01,48.04,124.3,33.57,160.01,33.56,z',
                    fill: getFill()
                }]
            }, {
                title: 'Safari',
                viewBox: true,
                gradients: [getGradient()],
                items: [{
                    type: 'path',
                    path: 'M,161.54,51.35,c,-5.04,0,-10,0.31,-14.88,0.89,l,-0.36,-1.8,c,-0.21,-1.04,-0.6,-1.98,-1.12,-2.83,c,3.81,-3.08,6.25,-7.78,6.25,-13.06,c,0,-9.27,-7.51,-16.78,-16.78,-16.78,s,-16.78,7.51,-16.78,16.78,c,0,7.45,4.85,13.76,11.57,15.95,c,-0.21,1.05,-0.21,2.16,0,3.28,l,0.33,1.67,C,76.45,69.5,37.12,118.04,37.12,175.78,c,0,68.71,55.71,124.41,124.42,124.41,c,68.71,0,124.41,-55.7,124.41,-124.41,C,285.96,107.06,230.25,51.35,161.54,51.35,z,M,163.69,81,c,44.55,0,81.83,31.16,91.23,72.87,l,-5.76,2.34,c,-1.48,-6.81,-7.55,-11.91,-14.8,-11.91,c,-8.37,0,-15.16,6.79,-15.16,15.16,c,0,0.75,0.08,1.48,0.18,2.21,l,-27.71,-0.28,c,-0.54,-1.15,-1.14,-2.26,-1.82,-3.33,l,33.99,-51.1,l,0.55,-0.83,l,-47.66,40.59,c,-3.52,-1.57,-7.4,-2.48,-11.48,-2.56,l,0.86,-0.18,l,-11.77,-25.85,c,6.4,-1.77,11.11,-7.63,11.11,-14.59,c,0,-8.37,-6.78,-15.15,-15.16,-15.15,c,-0.75,0,-1.47,0.07,-2.19,0.18,l,0.58,-6.34,C,153.57,81.41,158.58,81,163.69,81,z,M,121.46,34.55,c,0,-7.27,5.91,-13.18,13.18,-13.18,c,7.27,0,13.18,5.91,13.18,13.18,c,0,4.25,-2.03,8.02,-5.16,10.43,c,-1.83,-1.23,-4.13,-1.76,-6.47,-1.3,c,-2.26,0.45,-4.13,1.74,-5.35,3.49,C,125.42,45.53,121.46,40.49,121.46,34.55,z,M,70.17,174.52,c,0,-44.43,30.98,-81.63,72.52,-91.16,l,2.97,5.73,c,-6.1,1.96,-10.51,7.68,-10.51,14.42,c,0,8.37,6.78,15.16,15.15,15.16,c,0.68,0,1.35,-0.06,2,-0.15,l,-0.58,28.45,l,0.52,-0.11,c,-4.42,2.04,-8.24,5.13,-11.16,8.95,l,0.93,-1.47,l,-15.74,-6.03,l,11.72,12.39,l,0.26,-0.42,c,-1.9,3.71,-3.06,7.88,-3.24,12.29,l,-0.03,-0.16,l,-26.23,12.09,c,-1.99,-6.04,-7.67,-10.41,-14.38,-10.41,c,-8.37,0,-15.16,6.78,-15.16,15.16,c,0,0.64,0.05,1.28,0.13,1.91,l,-7.83,-0.76,C,70.63,185.24,70.17,179.94,70.17,174.52,z,M,163.69,268.05,c,-44.29,0,-81.38,-30.78,-91.06,-72.11,l,6.91,-3.53,c,1.46,6.86,7.53,12,14.82,12,c,8.37,0,15.15,-6.79,15.15,-15.16,c,0,-1.05,-0.11,-2.07,-0.31,-3.07,l,28.58,0.3,c,0.45,0.95,0.96,1.87,1.5,2.76,l,-34.5,52.77,l,2.27,-1.95,l,45.29,-39.2,c,3.36,1.53,7.05,2.48,10.94,2.66,l,-0.19,0.04,l,12.26,26.27,c,-6.55,1.66,-11.42,7.6,-11.42,14.68,c,0,8.37,6.78,15.15,15.16,15.15,c,0.76,0,1.51,-0.07,2.25,-0.18,l,0.04,6.88,C,175.66,267.46,169.75,268.05,163.69,268.05,z,M,186.62,265.21,l,-3.89,-6,c,6.61,-1.64,11.52,-7.59,11.52,-14.7,c,0,-8.37,-6.8,-15.16,-15.16,-15.16,c,-0.66,0,-1.3,0.05,-1.93,0.14,v,-28.6,l,-0.25,0.04,c,4.09,-1.85,7.7,-4.59,10.55,-7.98,l,15.16,6.59,l,-11.04,-13.04,c,1.58,-3.35,2.56,-7.04,2.78,-10.95,l,25.52,-11.64,c,1.9,6.18,7.66,10.68,14.47,10.68,c,8.38,0,15.16,-6.79,15.16,-15.16,c,0,-0.69,-0.06,-1.37,-0.16,-2.04,l,6.5,1.2,c,0.89,5.17,1.36,10.49,1.36,15.91,C,257.22,218.26,227.19,254.99,186.62,265.21,z',
                    fill: getFill()
                }]
            }, {
                title: 'Explorer',
                viewBox: true,
                gradients: [getGradient()],
                items: [{
                    type: 'path',
                    path: 'M,279.98,22.66,c,-21.2,-19.1,-69.25,3.82,-95.75,19.3,c,-7.6,-1.2,-15.57,-1.85,-23.88,-1.85,c,-33.49,0,-60.52,9.85,-81.06,28.43,c,-23.36,21.39,-36.31,49.4,-36.31,81.77,c,0,0.28,0.01,0.56,0.01,0.84,c,32.87,-51.5,83.42,-77.9,96.82,-84.87,c,2.12,-0.99,3.38,1.55,1.41,2.53,c,-0.15,0.42,-0.15,0,0,0,c,-22.54,13.5,-64.34,52.59,-91.46,108.86,l,-0.03,-0.07,c,-17.17,35.47,-31.67,85.29,-2.67,103.58,c,21.97,13.82,61.3,-2.48,92.95,-23.18,c,7.64,1.08,15.67,1.65,24.15,1.65,c,58.4,0,99.37,-32.23,113.99,-79.24,l,-80.22,-0.14,c,-3.37,16.61,-14.64,25.48,-32.23,25.48,c,-22.1,0,-37.29,-12.11,-38.28,-40.12,l,152.28,-0.14,c,0.28,-5.78,-0.42,-9.85,-0.42,-14.36,c,0,-52.51,-31.43,-93.55,-82.55,-106.63,c,20.81,-12.94,59.74,-32.09,78.48,-16.81,c,14.07,11.4,6.33,35.33,2.95,45.18,c,-0.56,2.54,2.4,2.96,2.96,0.57,C,288.14,55.73,290.26,31.94,279.98,22.66,z,M,132.72,256.76,c,-24.69,14.75,-58.73,25.39,-75.39,12.89,c,-12.43,-9.35,-6.96,-34.68,3.98,-59.38,c,6.64,9.92,14.95,18.86,24.73,26.3,C,99.26,246.51,114.79,253.24,132.72,256.76,z,M,127.14,130.46,c,0.42,-24.35,17.87,-34.9,36.17,-34.9,c,19.28,0,34.9,11.12,34.9,34.9,H,127.14,z',
                    fill: getFill()
                }]
            }, {
                title: 'Opera',
                viewBox: true,
                gradients: [getGradient()],
                items: [{
                    type: 'path',
                    path: 'M,159.54,20.45,c,-74.89,0,-128.72,54.32,-128.72,135.81,c,0,72.5,52.34,138.35,128.73,138.35,c,77.12,0,129.74,-65.83,129.74,-138.35,C,289.29,74.13,233.75,20.45,159.54,20.45,z,M,159.52,265.48,L,159.52,265.48,c,-22.89,0,-34.9,-16.11,-41.21,-37.96,c,-2.84,-10.37,-4.58,-21.85,-5.63,-33.41,c,-1.14,-13.74,-1.29,-27.73,-1.29,-40.28,c,0,-9.93,0.18,-19.79,0.74,-29.26,c,1.24,-17.28,3.86,-34.31,8.9,-48.33,c,6.94,-17.18,18.71,-28.22,38.49,-28.22,c,25,0,37.63,17.82,43.85,43.22,c,4.29,18.94,5.6,41.24,5.6,62.74,c,0,22.99,-1.03,51.53,-7.63,74.42,C,194.73,249.79,182.42,265.48,159.52,265.48,z',
                    fill: getFill()
                }]
            }]
        }]
    }
});
