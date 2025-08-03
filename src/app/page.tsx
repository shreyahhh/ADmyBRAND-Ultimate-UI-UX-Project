import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import ParallaxText from '@/components/ui/ParallaxText';
import ScrollLinked from '@/components/ui/ScrollLinked';
import Keyframes from '@/components/ui/Keyframes';
import ScrollTriggered from '@/components/ui/ScrollTriggered';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              AI-Powered Marketing Suite
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Marketing with{' '}
              <span className="gradient-text">AI-Powered</span> Insights
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Automate campaigns, optimize performance, and unlock data-driven insights with our comprehensive AI marketing suite. 
              Built for modern marketers who demand results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="gradient" size="xl">
                Start Free Trial
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">500%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframes Animation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dynamic AI Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Experience the fluid, intelligent animations that power our AI-driven platform
            </p>
            <div className="flex justify-center items-center">
              <Keyframes />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Triggered Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AI-Powered Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our intelligent marketing tools that adapt and learn from your data
            </p>
          </div>
          <ScrollTriggered />
        </div>
      </section>

      {/* Parallax Scroll Section */}
      <section className="py-16 px-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Scroll to Experience the Power
          </h2>
          <p className="text-muted-foreground">
            Watch how our AI adapts to your scroll velocity
          </p>
        </div>
        <ParallaxText baseVelocity={-2}>AI-Powered Marketing</ParallaxText>
        <ParallaxText baseVelocity={2}>Scroll Velocity Detection</ParallaxText>
      </section>

      {/* Interactive Scroll Component Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From campaign automation to advanced analytics, we've got you covered with our comprehensive suite of AI-powered tools.
            </p>
          </div>

          {/* Interactive Scroll Component */}
          <div className="flex justify-center mb-12">
            <ScrollLinked />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-background rounded-lg p-8 border border-border/50 hover:border-border transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Starter</h3>
                <div className="text-3xl font-bold text-foreground mb-1">$29</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 10,000 contacts
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic AI insights
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-background rounded-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Pro</h3>
                <div className="text-3xl font-bold text-foreground mb-1">$99</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 100,000 contacts
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI features
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <Button variant="gradient" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-background rounded-lg p-8 border border-border/50 hover:border-border transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-foreground mb-1">Custom</div>
                <div className="text-sm text-muted-foreground">contact sales</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited contacts
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom AI models
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated support
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SLA guarantee
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Built by Marketers, for Marketers
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ADmyBRAND was founded by a team of marketing professionals who were frustrated with the complexity and inefficiency of existing marketing tools. We set out to create a solution that leverages the power of AI to make marketing simpler, more effective, and more accessible.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we serve thousands of businesses worldwide, helping them achieve remarkable results through intelligent automation and data-driven insights.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Mission</h3>
                    <p className="text-sm text-muted-foreground">Empower marketers with AI-driven tools</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Vision</h3>
                    <p className="text-sm text-muted-foreground">The future of marketing is intelligent</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Values</h3>
                    <p className="text-sm text-muted-foreground">Innovation, transparency, results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your marketing? Let's talk about how ADmyBRAND can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@admybrand.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-muted-foreground">123 AI Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
                    suppressHydrationWarning
                  ></textarea>
                </div>
                <Button variant="gradient" className="w-full" suppressHydrationWarning>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 