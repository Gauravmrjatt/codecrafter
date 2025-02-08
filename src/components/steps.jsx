import React, { useRef, useEffect, useState } from 'react';
import Stepper, { Step } from './Stepper';

const Steps = () => {
    const stepperRef = useRef(null);
    const [name, setName] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const handleWheel = (event) => {
            if (!stepperRef.current) return;

            if (event.deltaY > 0) {
                stepperRef.current.next();
            } else if (event.deltaY < 0) {
                stepperRef.current.previous();
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <Stepper
            ref={stepperRef}
            initialStep={1}
            onStepChange={(step) => setCurrentStep(step)}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
        >

            <Step>
                <div className="p-6 bg-white rounded-lg ">
                    <span className="text-4xl font-bold text-blue-600">1</span>
                    <h3 className="text-xl font-semibold mt-2">Sign Up</h3>
                    <p className="text-gray-600 mt-2">Create your account in minutes.</p>
                </div>
            </Step>
            <Step>
                <div className="p-6 bg-white rounded-lg ">
                    <span className="text-4xl font-bold text-blue-600">2</span>
                    <h3 className="text-xl font-semibold mt-2">Match & Connect</h3>
                    <p className="text-gray-600 mt-2">Find the perfect developer or job.</p>
                </div>

            </Step>
            <Step>
                <div className="p-6 bg-white rounded-lg ">
                    <span className="text-4xl font-bold text-blue-600">3</span>
                    <h3 className="text-xl font-semibold mt-2">Start Working</h3>
                    <p className="text-gray-600 mt-2">Collaborate and grow your career.</p>
                </div>
            </Step>
            <Step>
                <div key={name} className="p-6 bg-white rounded-lg ">
                    <span className="text-4xl font-bold text-blue-600">4</span>
                    <h3 className="text-xl font-semibold mt-2">Done</h3>
                    <p className="text-gray-600 mt-2">You have done</p>
                </div>
            </Step>
        </Stepper>
    );
};

export default Steps;
