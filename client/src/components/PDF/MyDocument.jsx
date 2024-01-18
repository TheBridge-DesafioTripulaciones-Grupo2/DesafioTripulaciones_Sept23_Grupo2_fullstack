import React from 'react';
import { Document, Page, Text, Image, View,  StyleSheet } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const MyDocument = ({ data }) => {
    
const styles = StyleSheet.create({
    page: {
        position: 'relative',
        backgroundColor: '#FAFAFA',
        width: 595,
        height: 842,
    },
    imagen: {
        height: '100%',
        width: '100%',
      },
    imgPropuestaPDF: {
        position: 'absolute',
        top: 0,
        paddingLeft: 7,
        width: 112,
        height: 64,
    },
    datosHeaderPropuestaPDF: {
        paddingTop: 74,
        width: 595,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerSectionPropuestaPDF: {
        position: 'relative',
        width: 275,
        height: 52,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    pHeaderSectionPropuestaPDF: {
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
        letterSpacing: '0.025%',
        padding: '4px 0',
        color: '#1F1D1C',
    },
    imgHeaderSectionPropuestaPDF: {
        width: '100%',
        height: 2,
    },
    img1HeaderSectionPropuestaPDF: {
        position: 'absolute',
        top: 18,
        left: 0,
    },
    img2HeaderSectionPropuestaPDF: {
        position: 'absolute',
        top: 36,
        left: 0,
    },
    img3HeaderSectionPropuestaPDF: {
        position: 'absolute',
        top: 52,
        left: 0,
    },
    separadorPropuestaPDF: {
        width: 595,
        height: 17,
        backgroundColor: '#f5bbbb',
    },
    pSeparadorPropuestaPDF: {
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1.25,
        letterSpacing: '0.02em',
        textAlign: 'center',
    },
    separador1PropuestaPDF: {
        marginTop: 21,
        marginBottom: 23,
    },
    separador2PropuestaPDF: {
        marginBottom: 22,
    },
    tarifasPropuestaPDF: {
        borderCollapse: 'collapse',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
    },
    thTarifasPropuestaPDF: {
        width: 84,
        height: 10,
        backgroundColor: '#fceded',
    },
    tbodyTarifasPropuestaPDF: {
        width: 147,
        height: 24,
        border: '1px solid #D0CCCB',
    },
    tdTarifasPropuestaPDF: {
        width: 84,
        height: 24,
        border: '1px solid #D0CCCB',
    },
    otrosActualPropuestaPDF: {
        position: 'absolute',
        top: 197,
        left: 433,
        borderCollapse: 'collapse',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
    },
    otrosOfertaPropuestaPDF: {
        position: 'absolute',
        top: 517,
        left: 432,
        borderCollapse: 'collapse',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
    },
    totalActualPropuestaPDF: {
        position: 'absolute',
        top: 307,
        left: 432,
        borderCollapse: 'collapse',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
    },
    totalOfertaPropuestaPDF: {
        position: 'absolute',
        top: 627,
        left: 431,
        borderCollapse: 'collapse',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
    },
    TotalCardPropuestaPDF: {
        marginRight: 21,
        display: 'inline-flex',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'flex-start',
        gap: 10,
        width: 127,
        height: 44,
        borderRadius: 15,
        background: '#fff',
        boxShadow: '4px 4px 10px 0px rgba(212, 212, 212, 0.9), -4px -4px 8px 0px rgba(255, 255, 255, 0.9), 4px -4px 8px 0px rgba(212, 212, 212, 0.2), -4px 4px 8px 0px rgba(212, 212, 212, 0.2), -1px -1px 2px 0px rgba(212, 212, 212, 0.5) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.3) inset',
    },
    divTotalCardPropuestaPDF: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    div2TotalCardPropuestaPDF: {
        display: 'flex',
        alignItems: 'center',
        gap: -58,
    },
    priceTotalCardPropuestaPDF: {
        width: 97,
        margin: 0,
        color: '#AB2526',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 24,
        letterSpacing: '0.02em',
    },
    div3TotalCardPropuestaPDF: {
        display: 'flex',
        padding: 4,
        alignItems: 'flex-start',
        gap: 8.06,
        borderRadius: '100.752px',
        background: 'var(--neutros-gris300, #ada4a2)',
    },
    svgTotalCardPropuestaPDF: {
        width: 21,
        height: 21,
    },
    CardContainerPropuestaPDF: {
        marginTop: 35,
        marginLeft: 16,
        marginBottom: 22,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    porcentajesPropuestaPDF: {
        marginTop: 21,
    },
    imgCIAPDFPropuestaPDF: {
        position: 'absolute',
        top: 746,
        left: 421,
        width: 147,
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgImgCIAPDFPropuestaPDF: {
        width: 147,
        height: 'auto',
    },
    labelPDF: {
        fontFamily: 'Lato, sans-serif',
        fontWeight: 600,
        fontSize: 8,
        color: '#877F7D',
        width: 125,
    },
    });


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.imagen} src="/portada-pdf.svg" />
      </Page>
      <Page size="A4" style={styles.page}>
        <Image style={styles.imgPropuestaPDF} src="/Several.svg" />
        <View style={styles.datosHeaderPropuestaPDF}>
            <View style={styles.headerSectionPropuestaPDF}>
                <p style={styles.pHeaderSectionPropuestaPDF}>Nombre: The Bridge</p>
                <Image style={styles.imgHeaderSectionPropuestaPDF} src="/puntos.png" />
            </View>
        </View>

      </Page>
    </Document>
  );
};

export default MyDocument;