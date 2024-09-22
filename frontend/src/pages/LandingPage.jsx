

import { Link } from 'react-router-dom';
import { Button } from '../components/Button'; 
import '../../src/App.css'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col animate-background">
      <main className="flex-1 flex flex-col items-center justify-center text-center p-5">
        <h2 className="text-4xl font-bold mb-4">Welcome to FundKaro</h2>
        <p className="text-lg mb-8">
          Your one-stop solution for fast and secure payments.
        </p>
        <div>
          <Link to="/signup">
            <Button label="Get Started" className="mr-4" />
          </Link>
          <Link to="/learnmore">
            <Button label="Learn More" />
          </Link>
        </div>
      </main>
      <footer className="bg-white p-5 text-center shadow-md">
        &copy; 2024 FundKaro by Siddhi. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
