import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';

const Blog = () => {
    return (

        <div>
            <CommonBanner
                data={"Frequently Ask Question"}
            ></CommonBanner>
            <div className='my-8'>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        When should you use Context API?
                    </div>
                    <div className="collapse-content">
                        <p>If the project is smaller and focuses on encapsulating the modules, using Context API will help to make data accessible to several components at various nesting level.
                        In other case, when a data is needed by so many components such as user state data, cart state, important common calculation function etc.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>Custom hook is a reusable special Javascript function. Componenet logic used by multiple componenets are extracted to a hook. Hooks will have 'use' in the beginning of the name. For Example: useFetch. </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p> useRef hook is part of the React Hooks API. It is a function which takes one argument and returns an Object whose current property is initialized to the passed argument . It allows to directly create a reference to the DOM element in the functional component. </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>useMemo is a great tool to memoize functional components. When applied correctly, it prevents useless re-renderings when previous props equal to current props. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;