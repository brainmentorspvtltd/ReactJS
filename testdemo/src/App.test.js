
import Adapter from 'enzyme-adapter-react-16';
import {configure,shallow} from 'enzyme';
import React from 'react';
import App from './App';
configure({adapter:new Adapter()});
describe(<App/>,()=>{
    it("Check <App/> is Present",
    ()=>{	const wrapper = shallow(<App/>);
        var app = new App();
        console.log("Wrapper is ",app);
        var result = app.add(10,20);
        expect(result).toBe(30);


//expect(wrapper.find(App));
});

it("Check <App/> Props is Present",()=>{	
    const wrapper = shallow(<App a="100" b="200"/>);
    console.log(wrapper);
expect(wrapper.contains("<h2>Sum is 300</h2>"));
});

});
