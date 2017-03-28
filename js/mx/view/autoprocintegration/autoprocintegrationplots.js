function AutoProcIntegrationPlots(args) {

}

AutoProcIntegrationPlots.prototype.getPanel = function() {
    var height = 200;
    var width = 300;
    this.panel = Ext.create('Ext.panel.Panel', {
        title : 'Auto-Processing Plots',
        // layout: 'fit',
        cls : 'border-grid',
        margin : 5,
        height : 500,        
        items: [
                    {
                        xtype: 'container',
                        layout : 'hbox',
                        margin : 20,
                        items : [{
                                    html : '<div id="rfactor">rfactor</div>',
                                    width : width,
                                    height :height                                            
                                },
                                {
                                    html : '<div id="completeness">completeness</div>',
                                    width : width,
                                    height :height                                            
                                },
                                {
                                    html : '<div id="sigmaI">sigmaI</div>',
                                    width : width,
                                    height :height                                            
                                }
                        ]                                    
                    },
                    {
                        xtype: 'container',
                        layout : 'hbox',
                        margin : 20,
                        items : [{
                                    html : '<div id="cc2">cc2</div>',
                                    width : width,
                                    height :height                                            
                                },
                                {
                                    html : '<div id="sigmaAnno">sigmaAnno</div>',
                                    width : width,
                                    height :height                                            
                                },
                                {
                                    html : '<div id="anno">anno</div>',
                                    width : width,
                                    height :height                                            
                                }
                        ]                                    
                    }
            ]
    });
    return this.panel;
};

/**
* It loads autoProc results and displays different plots
* @method load
*/
AutoProcIntegrationPlots.prototype.load = function(data) {
	var _this = this;
    
    var autoProcIntegrationId = [];
    var spaceGroups = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].v_datacollection_summary_phasing_autoProcProgramId){
            autoProcIntegrationId.push(data[i].AutoProcIntegration_autoProcIntegrationId);
            spaceGroups.push(data[i].v_datacollection_summary_phasing_autoproc_space_group);
        }
    }
    var getLabels = function (spaceGroups, yLabel) {
        var spg = spaceGroups.slice(0);
        for (var i = 0 ; i < spg.length ; i++) {
            spg[i] += " (" + yLabel + ")";
        }
        return ["Resolution"].concat(spg);
    }

    var annoCorrPlotter = new AutoProcIntegrationCurvePlotter({
        height : 250,
        title : "Anom Corr vs Resolution",
        labels : getLabels(spaceGroups,"Anom Corr"),
        targetId : " anno",
        labelsDiv : " anno_legend",
        strokeWidth : 2.0
    });
    $("#anno").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer();
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleAnnoCorrection(autoProcIntegrationId),"Anom Corr vs Resolution",getLabels(spaceGroups,"Anom Corr"));
    });  
    $("#anno").html(annoCorrPlotter.getHTML());                         
    annoCorrPlotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleAnnoCorrection(autoProcIntegrationId));	                  
       
    var sigmaAnnoPlotter = new AutoProcIntegrationCurvePlotter({
        height : 250,
        title : "SigAno vs Resolution",
        labels : getLabels(spaceGroups,"SigAno"),
        targetId : " sigmaAnno",
        labelsDiv : " sigmaAnno_legend",
        strokeWidth : 2.0
    });
    $("#sigmaAnno").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer();
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleSigmaAno(autoProcIntegrationId),"SigAno vs Resolution",getLabels(spaceGroups,"SigAno"));
    });
    $("#sigmaAnno").html(sigmaAnnoPlotter.getHTML());                         
    sigmaAnnoPlotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleSigmaAno(autoProcIntegrationId));
                       
     var cc2Plotter = new AutoProcIntegrationCurvePlotter({
                            height : 250,
                            title : "CC/2 vs Resolution",
                            labels : getLabels(spaceGroups,"CC2"),
                            targetId : " cc2",
                            labelsDiv : " cc2_legend",
                            strokeWidth : 2.0,
                            valueRange : [0,110]                                               
                        });
    $("#cc2").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer({valueRange : [0,110]});
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleCC2(autoProcIntegrationId),"CC/2 vs Resolution",getLabels(spaceGroups,"CC2"));
    });
    $("#cc2").html(cc2Plotter.getHTML());                         
    cc2Plotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleCC2(autoProcIntegrationId));
	            
    var rFactorPlotter = new AutoProcIntegrationCurvePlotter({
                        height : 250,
                        title : "Rfactor vs Resolution",
                        labels : getLabels(spaceGroups,"Rfactor"),
                        targetId : " rfactor",
                        labelsDiv : " rfactor_legend",
                        strokeWidth : 2.0
                    });                             
    $("#rfactor").html(rFactorPlotter.getHTML());
    $("#rfactor").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer();
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleRfactor(autoProcIntegrationId),"Rfactor vs Resolution",getLabels(spaceGroups,"Rfactor"));
    });                        
    rFactorPlotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleRfactor(autoProcIntegrationId));
    
        /** Rfactor */
    var completenessPlotter = new AutoProcIntegrationCurvePlotter({
        height : 250,
        title : "Completeness vs Resolution",
        labels : getLabels(spaceGroups,"Completeness"),
        targetId : " completeness",
        labelsDiv : " completeness_legend",
        strokeWidth : 2.0
    });                             
    $("#completeness").html(completenessPlotter.getHTML());
    $("#completeness").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer();
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleCompleteness(autoProcIntegrationId),"Completeness vs Resolution",getLabels(spaceGroups,"Completeness"));
    });         
    completenessPlotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleCompleteness(autoProcIntegrationId));
    
    var isigmaPlotter = new AutoProcIntegrationCurvePlotter({
        height :250,
        title : "I/SigmaI vs Resolution",
        labels : getLabels(spaceGroups,"I/SigmaI"),
        targetId : " sigmaI",
        labelsDiv : " sigmaI_legend",
        strokeWidth : 2.0
    });
    $("#sigmaI").unbind('click').click(function(sender){
        var curveViewer = new CurveViewer();
        curveViewer.show();
        curveViewer.load(autoProcIntegrationId,EXI.getDataAdapter().mx.autoproc.getXScaleISigma(autoProcIntegrationId),"I/SigmaI vs Resolution",getLabels(spaceGroups,"I/SigmaI"));
    }); 
    $("#sigmaI").html(isigmaPlotter.getHTML());                         
    isigmaPlotter.loadUrl(EXI.getDataAdapter().mx.autoproc.getXScaleISigma(autoProcIntegrationId));             
};