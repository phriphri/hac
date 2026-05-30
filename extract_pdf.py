import PyPDF2

reader = PyPDF2.PdfReader('HAC Group Business Plan (1).pdf')
print(f'Total pages: {len(reader.pages)}')

for i in range(min(5, len(reader.pages))):
    text = reader.pages[i].extract_text() or 'NO TEXT'
    print(f'\n=== PAGE {i+1} ===')
    print(text[:2000])
