/**
 * @jest-environment jsdom
 */
import * as $ from 'jquery';
const setTestDiv = (html: string) => {
    $("#test_div").html(html);
}

it('should set text on div',  () => {
    document.body.innerHTML = '<div id="test_div"></div>';
    let html = $("#test_div");
    setTestDiv('hello world');
    expect(html.text()).toBe('hello world');
}); 