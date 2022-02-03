import React,{useState} from 'react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './ReportePdf.css'

const ReportePdf = () => {
    const [fecha,setFecha] = useState("hoy");



    const DescargarPdf = () => {
        const Template = document.getElementById('templates')
        const input = document.getElementById('template-reporte')

        let cloneInput = input.cloneNode(true)
        cloneInput.style.width = "210mm";
        cloneInput.style.height = "297mm";
        cloneInput.style.marginLeft = "20mm";
        cloneInput.style.marginRight = "20mm";

        Template.appendChild(cloneInput)
        document.documentElement.scrollTop = 0;
        html2canvas(cloneInput).then(canvas => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            pdf.addImage(imgData, 'JPEG', 0, 0)
            pdf.save('reporte.pdf')
        })
        Template.removeChild(cloneInput);
    }

    return (

        <div className="templates" id="templates">
            <div className="template-reporte" id="template-reporte">
                <div>
                    <h1>Reporte General</h1>
                </div>
                <div>
                    <p>Fecha: {fecha}</p>
                </div>

                <div>
                    <button onClick={(e)=>{DescargarPdf()}}>
                        Descargar
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default ReportePdf;