import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../config';
import { updateDoc, doc  } from 'firebase/firestore';

interface SubmitFormProps {
    userId: string;
    namaPerumahan: string;
    namaPengaju: string;
    noTelepon: string;
    lokasi: string;
    kelurahan: string;
    kecamatan: string;
    psuArea: number;
    suratPermohonanPenyerahan: File;
    ktpWarga: File;
    suratKeteranganTanggungJawabInformasi: File;
    beritaAcara: File;
    suratPernyataan: File | null;
}

export default async function submitForm(
    props: SubmitFormProps,
): Promise<any> {
    const {
        userId,
        namaPerumahan,
        namaPengaju,
        noTelepon,
        lokasi,
        kelurahan,
        kecamatan,
        psuArea,
        suratPermohonanPenyerahan,
        ktpWarga,
        suratKeteranganTanggungJawabInformasi,
        beritaAcara,
        suratPernyataan,
    } = props;

    const formCreatedAt = new Date().getTime();

    // Upload image to storage
    const suratPermohonanPenyerahanRef = ref(storage, `surat_permohonan/${userId}-surat_permohonan.${suratPermohonanPenyerahan.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(suratPermohonanPenyerahanRef, suratPermohonanPenyerahan);
    const suratPermohonanPenyerahanUrl = await getDownloadURL(suratPermohonanPenyerahanRef);

    const ktpWargaRef = ref(storage, `ktp_direktur/${userId}-ktp_direktur.${ktpWarga.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(ktpWargaRef, ktpWarga);
    const ktpWargaUrl = await getDownloadURL(ktpWargaRef);

    const suratKeteranganTanggungJawabInformasiRef = ref(storage, `surat_pernyataan_kebenaran/${userId}-surat_pernyataan_kebenaran.${suratKeteranganTanggungJawabInformasi.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(suratKeteranganTanggungJawabInformasiRef, suratKeteranganTanggungJawabInformasi);
    const suratKeteranganTanggungJawabInformasiUrl = await getDownloadURL(suratKeteranganTanggungJawabInformasiRef);


    const beritaAcaraRef = ref(storage, `site_plan_awal_induk/${userId}-site_plan_awal_induk.${beritaAcara.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(beritaAcaraRef, beritaAcara);
    const beritaAcaraUrl = await getDownloadURL(beritaAcaraRef);

    const suratPernyataanRef = suratPernyataan ? ref(storage, `site_plan_perubahan/${userId}-site_plan_perubahan.${suratPernyataan.name.split('.').pop() || '.jpg'}`) : null;
    if (suratPernyataan) {
        await uploadBytes(suratPernyataanRef!, suratPernyataan);
    }
    const suratPernyataanUrl = suratPernyataan ? await getDownloadURL(suratPernyataanRef!) : null;

    
    const newData = {
        'nama_perumahan': namaPerumahan,
        'nama_pengaju': namaPengaju,
        'no_telepon': noTelepon,
        'lokasi': lokasi,
        'kelurahan': kelurahan,
        'kecamatan': kecamatan,
        'psu_area': psuArea,
        'surat_permohonan': suratPermohonanPenyerahanUrl,
        'ktp_direktur': ktpWargaUrl,
        'surat_pernyataan_kebenaran': suratKeteranganTanggungJawabInformasiUrl,
        'site_plan_awal_induk': beritaAcaraUrl,
        'site_plan_perubahan': suratPernyataanUrl,
        'form_created_at': formCreatedAt,
    }

    // append data to database
    await updateDoc(doc(db, "user", userId), newData);
}