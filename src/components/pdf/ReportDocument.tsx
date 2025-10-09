import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 30,
        borderBottom: '1px solid #cccccc',
        paddingBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 11,
        color: '#666666',
        marginBottom: 5,
    },
    companyName: {
        fontSize: 10,
        color: '#999999',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
        paddingBottom: 5,
        borderBottom: '1px solid #eeeeee',
    },
    text: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#444444',
        marginBottom: 6,
        textAlign: 'justify',
    },
    kpiBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 10,
    },
    kpi: {
        backgroundColor: '#fafafa',
        padding: 10,
        width: '31%',
        textAlign: 'center',
        border: '1px solid #eeeeee',
    },
    kpiValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 3,
    },
    kpiLabel: {
        fontSize: 8,
        color: '#666666',
        textTransform: 'uppercase',
    },
    projectionBox: {
        backgroundColor: '#fafafa',
        padding: 12,
        marginBottom: 10,
        border: '1px solid #eeeeee',
    },
    projectionLabel: {
        fontSize: 9,
        color: '#666666',
        marginBottom: 3,
        fontWeight: 'bold',
    },
    projectionValue: {
        fontSize: 14,
        color: '#333333',
        fontWeight: 'bold',
    },
    summaryBox: {
        backgroundColor: '#fafafa',
        padding: 12,
        marginBottom: 10,
        border: '1px solid #eeeeee',
    },
    actionItem: {
        marginBottom: 15,
        paddingBottom: 12,
        borderBottom: '1px solid #f0f0f0',
    },
    actionHeader: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 4,
    },
    actionText: {
        fontSize: 9,
        color: '#555555',
        lineHeight: 1.6,
        textAlign: 'justify',
    },
    insightItem: {
        marginBottom: 8,
        paddingLeft: 12,
        borderLeft: '2px solid #eeeeee',
    },
    insightText: {
        fontSize: 9,
        color: '#555555',
        lineHeight: 1.5,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        right: 50,
        borderTop: '1px solid #eeeeee',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        fontSize: 8,
        color: '#999999',
    },
    pageNumber: {
        position: 'absolute',
        bottom: 30,
        right: 50,
        fontSize: 8,
        color: '#999999',
    },
})

interface ReportData {
    companyName: string
    currentRevenue: number
    monthlyClients: number
    avgTicket: number
    projections: Array<{ month: number; revenue: number }>
    insights: string[]
    summary: string
    actionPlan?: string[]
}

export const ReportDocument = ({ data }: { data: ReportData }) => {
    const projection6Months = data.projections[6]?.revenue || 0
    const projection12Months = data.projections[12]?.revenue || 0
    const growth6M = ((projection6Months - data.currentRevenue) / data.currentRevenue * 100).toFixed(1)
    const growth12M = ((projection12Months - data.currentRevenue) / data.currentRevenue * 100).toFixed(1)

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Piano di Crescita Strategico</Text>
                    <Text style={styles.subtitle}>
                        Generato il {new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                    </Text>
                    <Text style={styles.companyName}>VittoriConsulting - Metodo Vittori 360°</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Situazione Attuale</Text>
                    <View style={styles.kpiBox}>
                        <View style={styles.kpi}>
                            <Text style={styles.kpiValue}>
                                €{data.currentRevenue.toLocaleString('it-IT')}
                            </Text>
                            <Text style={styles.kpiLabel}>Fatturato Annuale</Text>
                        </View>
                        <View style={styles.kpi}>
                            <Text style={styles.kpiValue}>{data.monthlyClients}</Text>
                            <Text style={styles.kpiLabel}>Clienti/Mese</Text>
                        </View>
                        <View style={styles.kpi}>
                            <Text style={styles.kpiValue}>
                                €{Math.round(data.avgTicket).toLocaleString('it-IT')}
                            </Text>
                            <Text style={styles.kpiLabel}>Ticket Medio</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Proiezioni di Crescita</Text>
                    <View style={styles.projectionBox}>
                        <Text style={styles.projectionLabel}>Obiettivo 6 Mesi</Text>
                        <Text style={styles.projectionValue}>
                            €{projection6Months.toLocaleString('it-IT')} ({growth6M > '0' ? '+' : ''}{growth6M}%)
                        </Text>
                    </View>
                    <View style={styles.projectionBox}>
                        <Text style={styles.projectionLabel}>Obiettivo 12 Mesi</Text>
                        <Text style={styles.projectionValue}>
                            €{projection12Months.toLocaleString('it-IT')} ({growth12M > '0' ? '+' : ''}{growth12M}%)
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Analisi Strategica</Text>
                    <View style={styles.summaryBox}>
                        <Text style={styles.text}>{data.summary}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Insight Chiave</Text>
                    {data.insights.map((insight, index) => (
                        <View key={index} style={styles.insightItem}>
                            <Text style={styles.insightText}>• {insight}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>VittoriConsulting | +39 3513708950 | info@vittoriconsulting.it</Text>
                    <Text style={styles.footerText}>Pagina 1</Text>
                </View>
            </Page>

            {data.actionPlan && data.actionPlan.length > 0 && data.actionPlan.map((action, index) => {
                if (index % 5 === 0) {
                    const actionsSlice = data.actionPlan!.slice(index, index + 5)
                    return (
                        <Page key={`page-${index}`} size="A4" style={styles.page}>
                            <View style={styles.header}>
                                <Text style={styles.title}>Piano d&apos;Azione Dettagliato</Text>
                                <Text style={styles.subtitle}>Azioni {index + 1} - {Math.min(index + 5, data.actionPlan!.length)}</Text>
                            </View>

                            {actionsSlice.map((act, idx) => {
                                const actionNumber = index + idx + 1
                                const parts = act.match(/\[(.*?)\](.*?):(.*?)(?:\[Risorse:(.*?)\])?$/)
                                const phase = parts ? parts[1] : `Azione ${actionNumber}`
                                const title = parts ? parts[2].trim() : 'Azione'
                                const description = parts ? parts[3].trim() : act
                                const resources = parts && parts[4] ? parts[4].trim() : null

                                return (
                                    <View key={idx} style={styles.actionItem}>
                                        <Text style={styles.actionHeader}>
                                            {actionNumber}. [{phase}] {title}
                                        </Text>
                                        <Text style={styles.actionText}>{description}</Text>
                                        {resources && (
                                            <Text style={styles.actionText}>Risorse necessarie: {resources}</Text>
                                        )}
                                    </View>
                                )
                            })}

                            <View style={styles.footer}>
                                <Text style={styles.footerText}>VittoriConsulting | +39 3513708950 | info@vittoriconsulting.it</Text>
                                <Text style={styles.footerText}>Pagina {Math.floor(index / 5) + 2}</Text>
                            </View>
                        </Page>
                    )
                }
                return null
            })}
        </Document>
    )
}

