package com.cucumberpom.runner;


//import org.junit.runner.RunWith;
//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		         features = "src/main/java/com/cucumber/features/Application.feature",
                 glue= {"com/cucumber/stepdefinitions"},
                 //format= {"pretty","html:test-outout","json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"},
                 plugin = {"pretty", "html:target/cucumber.html"},
		         dryRun = false,
		         monochrome = true,
		         strict = true
		        // tags = {"@SmokeTest", "@Ent2End"} AND
		        // tags = {"@SmokeTest, @Ent2End"} //OR
                )

public class TestRunner {

}

