import PDFMerger from "pdf-merger-js";

// Function to handle uploading and merging PDFs
export const uploadPDFsAndMerge = async (req, res) => {
  if (!req.files || req.files.length < 2) {
    return res
      .status(400)
      .json({ message: "At least two PDF files are required" });
  }

  try {
    const merger = new PDFMerger();

    // Loop through uploaded files and add them to the PDF merger
    for (const file of req.files) {
      console.log(`Adding file buffer with length: ${file.buffer.length}`);
      await merger.add(file.buffer); // Add the file buffer directly to the merger
    }

    // Merge the PDFs and get the result as a buffer
    const mergedBuffer = await merger.saveAsBuffer();

    // Set the response headers to return the merged PDF
    res.set("Content-Type", "application/pdf");
    res.send(mergedBuffer); // Send the merged PDF to the client
  } catch (error) {
    console.error("Error during merging PDFs:", error.message);
    res.status(500).json({
      message: "Error merging PDFs",
      error: error.message || "Unknown error",
    });
  }
};
