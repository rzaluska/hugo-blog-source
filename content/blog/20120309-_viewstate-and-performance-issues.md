title: _VIEWSTATE and performance issues
link: http://jaffamonkey.com/6742/_viewstate-and-performance-issues
author: jaffamonkey
description: 
post_id: 6742
created: 2012/03/09 16:01:02
created_gmt: 2012/03/09 16:01:02
comment_status: open
post_name: _viewstate-and-performance-issues
status: publish
post_type: post

# _VIEWSTATE and performance issues

Viewstate represents the state of the page when it was last processed on the server. ViewState is used to track and restore the state values of controls that would otherwise be lost, either because those values do not post with the form or because they are not in the page html.  [caption id="attachment_6753" align="alignnone" width="572" caption="What is Viewstate?"]![](/wp-content/uploads/2012/03/states.jpg)[/caption] The problem with ViewState is that when you have a lot of controls on your page, or a DataGrid or some other complex animal, ViewState, which becomes part of the HTML baggage going back and forth over the wire, can grow very large. That's a drag on performance for the convenience you have of storing state "in the page". VIEWSTATE travels with each request and response and consumes precious bandwidth. Serializing and deserializing a complex object can incur too much overhead. To resolve, you can use server-side session or cache (instead of client-side) 

### Using VIEWSTATE with server-side cache

Copy and paste the following code into **Web.config** settings:- <appSettings> <add key="ServerSideViewState" value="true" /> </appSettings>

#### Code for Viewstate Server Manager

using System; using System.Collections; using System.Configuration; namespace ServerSideViewstate { public class viewStateSvrMgr { // This uses an array and mod to cycle repeatedly through an array (so limited size) //WARNING: When the user uses the "back" button on the browser, IE will not rerequest the page, so // if the user posts again they need the viewstate to still be present on the server. Need to set the VIEW_STATE_NUM_PAGES // to a tradeoff of number of back pages allowed and // the amount of memory consumed by the viewstate kept per page. private const short VIEW_STATE_NUM_PAGES = 5; //Number of pages to keep viewstate for //Name of storage location for veiwstate information private const string SESSION_VIEW_STATE_MGR = "VIEW_STATE_MGR"; private long lPageCount = 0; //Number of pages seen by this customer private string[] ViewStates = new string[VIEW_STATE_NUM_PAGES]; //Store for viewstates //Determine if server side is enabled or not from web.config file public bool ServerSideEnabled { get { //Not a problem if someone changes the value in web.config, because new AppDomain will // be started and all in process session is lost anyway return Convert.ToBoolean(ConfigurationSettings.AppSettings["ServerSideViewState"]); } } public viewStateSvrMgr() { } public long SaveViewState(string szViewState) { //Increment the total page seen counter lPageCount++; //Now use the modulas operator (%) to find remainder of that and size of viewstate storage, this creates a // circular array where it continually cycles through the array index range (effectively keeps // the last requests to match size of storage) short siIndex = (short)(lPageCount % VIEW_STATE_NUM_PAGES); //Now save the viewstate for this page to the current position. ViewStates[siIndex] = szViewState; return lPageCount; } public string GetViewState(long lRequestNumber) { //Could cycle though the array and make sure that the given request number is actually // present (in case the array is not big enough). Much faster to just take the // given request number and recalculate where it should be stored short siIndex = (short)(lRequestNumber % VIEW_STATE_NUM_PAGES); return ViewStates[siIndex]; } public static viewStateSvrMgr GetViewStateSvrMgr() { viewStateSvrMgr oViewStateMgr; //Check if already created the order object in session if (null == System.Web.HttpContext.Current.Session[SESSION_VIEW_STATE_MGR]) { //Not already in session, create a new one and put in session oViewStateMgr = new viewStateSvrMgr(); System.Web.HttpContext.Current.Session[SESSION_VIEW_STATE_MGR] = oViewStateMgr; } else { //Return the session order oViewStateMgr = (viewStateSvrMgr)System.Web.HttpContext.Current.Session[SESSION_VIEW_STATE_MGR]; } return oViewStateMgr; } } }

#### Example Page using this server-side VIEWSTATE

using System; using System.Collections; using System.ComponentModel; using System.Data; using System.Drawing; using System.Web; using System.Web.SessionState; using System.Web.UI; using System.Web.UI.WebControls; using System.Web.UI.HtmlControls; using System.Text; using System.IO; namespace ServerSideViewstate { public class BasePage : System.Web.UI.Page { //Setup the name of the hidden field on the client for storing the viewstate key