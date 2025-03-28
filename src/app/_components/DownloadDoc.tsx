"use client"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { CVData } from "../../lib/types/struct";
import StyledCVDocument from "./StyledCVDocument";


const DownloadDoc = ({ data }: { data: CVData }) => (
  <div className="flex flex-col items-center">
    {/* Preview du PDF */}
    <div className="border shadow-lg w-full max-w-4xl h-screen mb-4">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <StyledCVDocument data={data} />
      </PDFViewer>
    </div>

    {/* Bouton de téléchargement */}
    <PDFDownloadLink document={<StyledCVDocument data={data} />} fileName="CV_Hamid.pdf">
      {({ loading }) =>
        loading ? "Génération en cours..." : <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-md">Télécharger le CV</button>
      }
    </PDFDownloadLink>
  </div>
);

export default DownloadDoc;