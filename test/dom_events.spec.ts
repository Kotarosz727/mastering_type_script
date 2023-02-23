import * as jsdom from "jsdom";

const {JSDOM} = jsdom;

const htmlWithClickEvent = `
<body>
    <div id="click_handler_div" onclick="clickHandler()">click here</div>   
    <script>
        function clickHandler() {
            console.log('clicked');
        }
    </script>
</body>
`;

it('should fire onClick event', () => {
    let dom = new JSDOM(htmlWithClickEvent, {runScripts: "dangerously"});
    let clickHandlerDiv = <HTMLElement>dom.window.document.getElementById("click_handler_div");
    let clickEventSpy = jest.spyOn(clickHandlerDiv, 'click');
    clickHandlerDiv.click();
    expect(clickEventSpy).toHaveBeenCalled();
}); 