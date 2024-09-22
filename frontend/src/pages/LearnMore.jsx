import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button'; 

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* <Link to="/"><div className='pl-2 pt-2 font-semibold cursor-pointer'>FundKaro</div></Link> */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-5">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Learn More About FundKaro</h2>
          <p className="text-lg mb-4">
          FundKaro is a simple payment app where users can send and receive money securely and quickly.
          </p>
          <p className="text-lg">
            Explore the features and benefits of FundKaro below.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Features</h3>
          <ul className="list-disc text-left">
            <li>Send money to friends and family</li>
            <li>Receive money from others</li>
          
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <p className="text-lg">
            Sign up for FundKaro and receive initial dummy money. Send money to your friends using their email address or username.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Benefits</h3>
          <ul className="list-disc text-left">
            <li>Easy and fast transactions</li>
            <li>Secure payments</li>
            <li>Free initial dummy money on signup</li>
          </ul>
        </section>
        <div>
          <Link to="/signup">
            <Button label="Get Started" className="mr-4" />
          </Link>
          <Link to="/signin">
            <Button label="Sign In" />
          </Link>
        </div>
      </main>
      <footer className="bg-white p-5 text-center shadow-md">
        &copy; 2024 FundKaro by Siddhi. All rights reserved.
      </footer>
    </div>
  );
};

export default LearnMore;
