"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export default function ScrollTriggered() {
    return (
        <div style={container}>
            <div style={columnsContainer}>
                <div style={leftColumn}>
                    {features.slice(0, 3).map(([icon, title, description, hueA, hueB], i) => (
                        <Card i={i} icon={icon} title={title} description={description} hueA={hueA} hueB={hueB} key={title} />
                    ))}
                </div>
                <div style={rightColumn}>
                    {features.slice(3, 6).map(([icon, title, description, hueA, hueB], i) => (
                        <Card i={i + 3} icon={icon} title={title} description={description} hueA={hueA} hueB={hueB} key={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    icon: string
    title: string
    description: string
    hueA: number
    hueB: number
    i: number
}

function Card({ icon, title, description, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <div style={cardContent}>
                    <div style={iconContainer}>
                        <span style={iconStyle}>{icon}</span>
                    </div>
                    <h3 style={titleStyle}>{title}</h3>
                    <p style={descriptionStyle}>{description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 800,
    paddingBottom: 100,
    width: "100%",
}

const columnsContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
}

const leftColumn: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}

const rightColumn: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    width: 250,
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

const cardContent: React.CSSProperties = {
    padding: "24px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
}

const iconContainer: React.CSSProperties = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
}

const iconStyle: React.CSSProperties = {
    fontSize: "28px",
    color: "white",
}

const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1a202c",
    marginBottom: "10px",
    lineHeight: 1.3,
}

const descriptionStyle: React.CSSProperties = {
    fontSize: "13px",
    color: "#4a5568",
    lineHeight: 1.5,
    margin: 0,
}

/**
 * ==============   Data   ================
 */

const features: [string, string, string, number, number][] = [
    ["📊", "Advanced Analytics", "Get deep insights into your marketing performance with AI-powered analytics and predictive modeling.", 340, 10],
    ["⚡", "Campaign Automation", "Automate your marketing campaigns with intelligent workflows that adapt to your audience's behavior.", 20, 40],
    ["🎯", "Smart Optimization", "Let AI optimize your campaigns in real-time for maximum performance and ROI.", 60, 90],
    ["👥", "Audience Targeting", "Reach the right people at the right time with AI-powered audience segmentation and targeting.", 80, 120],
    ["🧪", "A/B Testing", "Test and optimize your campaigns with intelligent A/B testing and multivariate analysis.", 100, 140],
    ["📈", "Performance Tracking", "Track your marketing performance in real-time with comprehensive dashboards and reports.", 205, 245],
] 