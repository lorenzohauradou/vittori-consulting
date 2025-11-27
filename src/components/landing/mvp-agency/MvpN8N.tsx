'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Target, RefreshCw, Brain, Zap, GitBranch } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { OpenAIIcon, HubSpotIcon, SlackIcon, GmailIcon, WebhookIcon } from '@/components/icons/tech-icons'

const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'

const workflowNodes = [
    {
        id: 'trigger',
        type: 'Webhook',
        label: 'New Lead',
        Icon: WebhookIcon,
        color: '#9b59b6',
        x: 50,
        y: 120,
    },
    {
        id: 'ai',
        type: 'OpenAI',
        label: 'Qualify Lead',
        Icon: OpenAIIcon,
        color: '#10a37f',
        x: 220,
        y: 60,
    },
    {
        id: 'condition',
        type: 'IF',
        label: 'Score > 70?',
        Icon: GitBranch,
        color: '#f39c12',
        x: 390,
        y: 120,
    },
    {
        id: 'crm',
        type: 'HubSpot',
        label: 'Add to CRM',
        Icon: HubSpotIcon,
        color: '#ff7a59',
        x: 560,
        y: 60,
    },
    {
        id: 'email',
        type: 'Gmail',
        label: 'Send Email',
        Icon: GmailIcon,
        color: '#ea4335',
        x: 560,
        y: 180,
    },
    {
        id: 'slack',
        type: 'Slack',
        label: 'Notify Team',
        Icon: SlackIcon,
        color: '#4a154b',
        x: 730,
        y: 120,
    },
]

const connections = [
    { from: 'trigger', to: 'ai' },
    { from: 'ai', to: 'condition' },
    { from: 'condition', to: 'crm', label: 'Yes' },
    { from: 'condition', to: 'email', label: 'No' },
    { from: 'crm', to: 'slack' },
    { from: 'email', to: 'slack' },
]

function WorkflowNode({ node, index }: { node: typeof workflowNodes[0], index: number }) {
    const IconComponent = node.Icon
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
            className="absolute"
            style={{ left: node.x, top: node.y }}
        >
            <div className="relative group">
                <div
                    className="w-[100px] rounded-lg border border-white/10 bg-[#1a1a1c] shadow-xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
                >
                    <div
                        className="h-1"
                        style={{ backgroundColor: node.color }}
                    />
                    <div className="p-3">
                        <div className="flex items-center gap-2 mb-1.5">
                            <IconComponent className="w-4 h-4" style={{ color: node.color }} />
                            <span className="text-[9px] font-medium text-zinc-400 uppercase tracking-wider">
                                {node.type}
                            </span>
                        </div>
                        <p className="text-[11px] font-medium text-white truncate">
                            {node.label}
                        </p>
                    </div>
                </div>
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-800" />
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-800" />
            </div>
        </motion.div>
    )
}

function ConnectionLine({ from, to, label }: { from: typeof workflowNodes[0], to: typeof workflowNodes[0], label?: string }) {
    const startX = from.x + 100
    const startY = from.y + 35
    const endX = to.x
    const endY = to.y + 35

    const midX = (startX + endX) / 2

    return (
        <g>
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                d={`M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {label && (
                <text
                    x={midX}
                    y={(startY + endY) / 2 - 8}
                    fill="#71717a"
                    fontSize="9"
                    textAnchor="middle"
                    className="font-medium"
                >
                    {label}
                </text>
            )}
        </g>
    )
}

const features = [
    { text: 'Lead qualification automatica', icon: Target },
    { text: 'Sync CRM in tempo reale', icon: RefreshCw },
    { text: 'Email personalizzate con AI', icon: Brain },
    { text: 'Notifiche Slack istantanee', icon: Zap },
]

const stats = [
    { value: '400+', label: 'Integrazioni' },
    { value: '10x', label: 'Più veloce' },
    { value: '0', label: 'Codice richiesto' },
]

export default function MvpN8N() {
    return (
        <section id="n8n" className="relative py-10 sm:py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#EA4B71]/5 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#EA4B71]/5 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[#EA4B71] border border-[#EA4B71]/30 rounded-full mb-6 bg-[#EA4B71]/5">
                        <Image src="/images/logos/n8n.svg" alt="n8n" width={16} height={15} />
                        Automazioni n8n
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Workflow n8n che lavorano per te
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Automatizziamo i processi ripetitivi. Lead generation, onboarding, notifiche - tutto in autopilot
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-12"
                >
                    <div className="relative rounded-2xl border border-white/[0.08] bg-[#0f0f11] overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                </div>
                                <span className="text-xs text-zinc-500 font-medium">Lead Qualification Workflow</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.5 }}
                                    className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-medium text-emerald-400">Active</span>
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.6 }}
                                    className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                                >
                                    <Play className="w-3 h-3 text-zinc-400" />
                                    <span className="text-[10px] font-medium text-zinc-400">Test</span>
                                </motion.button>
                            </div>
                        </div>

                        <div
                            className="relative h-[280px] overflow-hidden"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                                backgroundSize: '24px 24px'
                            }}
                        >
                            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4a4a4a" />
                                        <stop offset="100%" stopColor="#6a6a6a" />
                                    </linearGradient>
                                </defs>
                                {connections.map((conn, i) => {
                                    const fromNode = workflowNodes.find(n => n.id === conn.from)!
                                    const toNode = workflowNodes.find(n => n.id === conn.to)!
                                    return (
                                        <ConnectionLine
                                            key={i}
                                            from={fromNode}
                                            to={toNode}
                                            label={conn.label}
                                        />
                                    )
                                })}
                            </svg>

                            {workflowNodes.map((node, i) => (
                                <WorkflowNode key={node.id} node={node} index={i} />
                            ))}


                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.9 }}
                                className="absolute bottom-4 right-4 flex items-center gap-3 px-3 py-2 bg-[#1a1a1c] border border-white/10 rounded-lg"
                            >
                                <div className="text-center">
                                    <p className="text-lg font-bold text-white">847</p>
                                    <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Executions</p>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <p className="text-lg font-bold text-emerald-400">99.2%</p>
                                    <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Success</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Automatizza. Scala. Risparmia.
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Con n8n costruiamo workflow che connettono il tuo MVP a centinaia di servizi.
                                Zero codice, massima flessibilità
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <motion.li
                                    key={feature.text}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-sm text-zinc-300"
                                >
                                    <feature.icon className="w-4 h-4 text-[#EA4B71]" />
                                    {feature.text}
                                </motion.li>
                            ))}
                        </ul>

                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-all"
                        >
                            Automatizza il tuo MVP
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                            >
                                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
