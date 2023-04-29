;/*FB_PKG_DELIM*/

__d("PolarisEventListener",["ExecutionEnvironment","memoize"],(function(a,b,c,d,e,f,g){"use strict";var h=!1,i=c("memoize")(function(){try{var a=Object.defineProperty({},"passive",{get:function(){h=!0}});c("ExecutionEnvironment").canUseDOM&&(window.addEventListener("test",null,a),window.removeEventListener("test",null,a))}catch(a){}return h}),j={capture:!1};a=function(){function a(a){this.$1=null,this.$1=a}a.add=function(b,c,d,e){e===void 0&&(e=j);var f=e;i()||(f=typeof e!=="boolean"&&!!e.capture);b.addEventListener(c,d,f);return new a(function(){b.removeEventListener(c,d,f)})};var b=a.prototype;b.remove=function(){this.$1&&(this.$1(),this.$1=null)};return a}();g["default"]=a}),98);
__d("isPlainObject",[],(function(a,b,c,d,e,f){"use strict";function a(a){return Object.prototype.toString.call(a)==="[object Object]"}f["default"]=a}),66);
__d("JavascriptWebErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1828905");b=d("FalcoLoggerInternal").create("javascript_web_error",a);e=b;g["default"]=e}),98);
__d("ErrorTransport",["JavascriptWebErrorFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){c("JavascriptWebErrorFalcoEvent").log(function(){return a})}g.log=a}),98);
__d("IntlCLDRNumberType26",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("ErrorSetup",["fb-error"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("fb-error").ErrorSetup}),98);
__d("ErrorLogging",["ClientConsistency","Env","ErrorGuard","ErrorSetup","ErrorTransport","JSErrorLoggingConfig","ScriptPath","SiteData","WebSession","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";c("ErrorGuard").skipGuardGlobal(c("Env").nocatch),d("JSErrorLoggingConfig").sampleWeight!=null&&c("setTimeout")(function(){c("ErrorSetup").setup({additional_client_revisions:c("ClientConsistency").getAdditionalRevisions(),appId:d("JSErrorLoggingConfig").appId,client_revision:c("SiteData").client_revision,extra:d("JSErrorLoggingConfig").extra,loggingFramework:c("SiteData").haste_site==="mobile"?"mobile":"blue",server_revision:c("SiteData").server_revision,spin:c("SiteData").spin,projectBlocklist:d("JSErrorLoggingConfig").projectBlocklist,push_phase:c("SiteData").push_phase,report_source:d("JSErrorLoggingConfig").report_source,report_source_ref:d("JSErrorLoggingConfig").report_source_ref,sample_weight:d("JSErrorLoggingConfig").sampleWeight,script_path:c("ScriptPath").getScriptPath(),web_session_id:d("WebSession").getId()},d("ErrorTransport").log)},0),c("ErrorSetup").preSetup()}),34);
__d("QuickMarkersSrcFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1836368");b=d("FalcoLoggerInternal").create("quick_markers_src",a);e=b;g["default"]=e}),98);
__d("QuickMarkersBlue",["QuickMarkersSrcFalcoEvent","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function a(a){h=a.event_id,i=a.script_path,j=a.weight,k("ClientInit")}function k(a){if(h==null)return;var b={event_id:h,marker_id:a,script_path:i,marker_page_time:c("performanceNow")(),weight:j};c("QuickMarkersSrcFalcoEvent").logImmediately(function(){return b})}g.startNewEvent=a;g.mark=k}),98);
__d("UserAgentDataTyped",["UserAgentData"],(function(a,b,c,d,e,f){e.exports=b("UserAgentData")}),null);
__d("tweetnacl",["tweetnacl-1.0.3"],(function(a,b,c,d,e,f){e.exports=b("tweetnacl-1.0.3")()}),null);
__d("XSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/",{tab:{type:"String"},section:{type:"String"},edit_section:{type:"String"},id:{type:"String"},dispute_id:{type:"String"},managed_notif_id:{type:"Int"},qp_id:{type:"Int"},ref:{type:"String"},privacy_source:{type:"Enum",enumType:1},option:{type:"String"},show_modal:{type:"Bool",defaultValue:!1},modal_type:{type:"String"},flow_kind:{type:"String"},referrer:{type:"Enum",enumType:1},protocol:{type:"String"},country:{type:"String"},initial_open_app_id:{type:"FBID"},legacy_contact_delegator_id:{type:"FBID"},group_id:{type:"FBID"},video_crosspost_partner_id:{type:"FBID"},show_add_phone_dialog:{type:"Bool",defaultValue:!1},phone_number:{type:"String"},mark_as_recycle:{type:"Bool",defaultValue:!1},mark_as_shared:{type:"Bool",defaultValue:!1},from_checkup:{type:"Bool",defaultValue:!1},from_accounts_center:{type:"Bool",defaultValue:!1},profile_id:{type:"FBID"},from_interstitial:{type:"Bool",defaultValue:!1}})}),null);
__d("XXMLTQuizAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/m/async/quiz/{quiz_id}/",{quiz_id:{type:"FBID",required:!0},is_submitting:{type:"Bool",defaultValue:!1},send_email_automatically:{type:"Bool",defaultValue:!1},session_id:{type:"String"},user_id:{type:"FBID"},ad_market_account_id:{type:"FBID"},page_id:{type:"FBID"},business_id:{type:"FBID"},quiz_container_cms_id:{type:"FBID"},is_page_selector:{type:"Bool",defaultValue:!1},question_id_override:{type:"Int"},skip_dashboard_selection_questions:{type:"Bool",defaultValue:!1},is_ig_style:{type:"Bool",defaultValue:!1},is_fbp:{type:"Bool",defaultValue:!1}})}),null);