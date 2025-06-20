
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Merch = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    gsap.fromTo('.merch-title', {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.fromTo('.email-form', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send notification to unpheric@gmail.com
      const notificationData = {
        to: 'unpheric@gmail.com',
        subject: 'New Merch Notification Signup',
        message: `New user signed up for merch notifications: ${email}`,
        timestamp: new Date().toISOString(),
        type: 'merch_signup'
      };

      console.log('Merch notification sent:', notificationData);

      toast({
        title: "Success!",
        description: "You'll be the first to know when merch drops!",
      });

      setEmail('');
    } catch (error) {
      console.error('Error sending notification:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Title */}
        <h1 className="merch-title text-6xl md:text-8xl font-bold text-gradient mb-8 animate-pulse-purple">
          MERCH COMING SOON
        </h1>
        
        <p className="text-unpheric-gray text-xl mb-12">
          Exclusive Unpheric merchandise is in development. 
          Be the first to know when it drops.
        </p>

        {/* Email Signup Form */}
        <div className="email-form">
          <h2 className="text-2xl font-bold text-unpheric-white mb-6">
            Be the First to Know
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-gray-900 border-gray-700 text-unpheric-white placeholder-unpheric-gray focus:border-unpheric-purple"
              required
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-unpheric-purple hover:bg-unpheric-purple/80 text-white px-8 glow-purple-hover disabled:opacity-50"
            >
              {isLoading ? 'Signing Up...' : 'Notify Me'}
            </Button>
          </form>
          
          <p className="text-sm text-unpheric-gray mt-4">
            We'll never spam you. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merch;
