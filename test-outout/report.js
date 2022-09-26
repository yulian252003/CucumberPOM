$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/cucumber/features/Application.feature");
formatter.feature({
  "name": "Test Free CRM Web Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Application Landing Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user is on Application Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_Application_Landing_Page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Free CRM software for customer relationship management, sales, marketing campaigns and support.]\u003e but was:\u003c[#1 Free CRM customer relationship management software cloud]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.verify_user_is_on_Application_Landing_Page(LoginSteps.java:47)\r\n\tat ✽.Verify user is on Application Landing Page(src/main/java/com/cucumber/features/Application.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters the Loggin Area",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_Loggin_Area()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify user is on the Loggin Area",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Verify_user_is_on_the_Loggin_Area()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Application Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the Loggin Area",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_Loggin_Area()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Login\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SWO-35097263\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\JULIAN~1.PAT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:53691}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 988d19c604970a3ca3eabc4b9d6089a0\n*** Element info: {Using\u003dlink text, value\u003dLogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:376)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.cucumberpom.pages.LoginPage.enterAreaOfLogin(LoginPage.java:27)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.user_enters_the_Loggin_Area(LoginSteps.java:54)\r\n\tat ✽.User enters the Loggin Area(src/main/java/com/cucumber/features/Application.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify User is on Application Home",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.verify_User_is_on_Application_Home()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create New Contact in Application",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the Loggin Area",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_Loggin_Area()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Login\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SWO-35097263\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\JULIAN~1.PAT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:53742}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d069b3f1c5f5361fc3c479ff83847dfc\n*** Element info: {Using\u003dlink text, value\u003dLogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:376)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.cucumberpom.pages.LoginPage.enterAreaOfLogin(LoginPage.java:27)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.user_enters_the_Loggin_Area(LoginSteps.java:54)\r\n\tat ✽.User enters the Loggin Area(src/main/java/com/cucumber/features/Application.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Open Contact Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.open_Contact_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create New Contact clicking On Button Plus",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.create_New_Contact_clicking_on_button_plus()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});