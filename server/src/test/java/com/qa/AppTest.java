package com.qa;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    App app;

    @Test
    public void shouldAnswerWithTrue()
    {
        app = new App();
        app.main(new String[]{});
        //assertTrue( true );
    }
}
