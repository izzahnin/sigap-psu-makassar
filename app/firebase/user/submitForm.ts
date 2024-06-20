import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../config';
import { updateDoc, doc  } from 'firebase/firestore';

export interface SubmitFormProps {
    userId: string;
    namaPerumahan: string;
    namaPengaju: string;
    noTelepon: string;
    lokasi: string;
    kelurahan: string;
    kecamatan: string;
    psuArea: number;
    suratPermohonan: File;
    ktpDirektur: File;
    npwpPendiriPerusahaan: File;
    suratPernyataanKebenaran: File;
    suratPernyataanPenyerahanPSU: File;
    sitePlanAwalInduk: File;
    sitePlanPerubahan: File | null;
    sitePlanDiarsirSertaLuasan: File;
    izinBPN: File | null;
    rekomendasiTPU: File | null;
    rekomendasiPetuntukanLahan: File | null;
    sertifikatPSUPemechan: File | null;
    buktiPembayaranKompensasiLahanKuburan: File | null;
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
        suratPermohonan,
        ktpDirektur,
        npwpPendiriPerusahaan,
        suratPernyataanKebenaran,
        suratPernyataanPenyerahanPSU,
        sitePlanAwalInduk,
        sitePlanPerubahan,
        sitePlanDiarsirSertaLuasan,
        izinBPN,
        rekomendasiTPU,
        rekomendasiPetuntukanLahan,
        sertifikatPSUPemechan,
        buktiPembayaranKompensasiLahanKuburan,
    } = props;

    const formCreatedAt = new Date().getTime();

    // Upload image to storage
    const suratPermohonanRef = ref(storage, `surat_permohonan/${userId}-surat_permohonan.${suratPermohonan.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(suratPermohonanRef, suratPermohonan);
    const suratPermohonanUrl = await getDownloadURL(suratPermohonanRef);

    const ktpDirekturRef = ref(storage, `ktp_direktur/${userId}-ktp_direktur.${ktpDirektur.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(ktpDirekturRef, ktpDirektur);
    const ktpDirekturUrl = await getDownloadURL(ktpDirekturRef);

    const npwpPendiriPerusahaanRef = ref(storage, `npwp_pendiri_perusahaan/${userId}-npwp_pendiri_perusahaan.${npwpPendiriPerusahaan.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(npwpPendiriPerusahaanRef, npwpPendiriPerusahaan);
    const npwpPendiriPerusahaanUrl = await getDownloadURL(npwpPendiriPerusahaanRef);

    const suratPernyataanKebenaranRef = ref(storage, `surat_pernyataan_kebenaran/${userId}-surat_pernyataan_kebenaran.${suratPernyataanKebenaran.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(suratPernyataanKebenaranRef, suratPernyataanKebenaran);
    const suratPernyataanKebenaranUrl = await getDownloadURL(suratPernyataanKebenaranRef);

    const suratPernyataanPenyerahanPSURef = ref(storage, `surat_pernyataan_penyerahan_psu/${userId}-surat_pernyataan_penyerahan_psu.${suratPernyataanPenyerahanPSU.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(suratPernyataanPenyerahanPSURef, suratPernyataanPenyerahanPSU);
    const suratPernyataanPenyerahanPSUUrl = await getDownloadURL(suratPernyataanPenyerahanPSURef);

    const sitePlanAwalIndukRef = ref(storage, `site_plan_awal_induk/${userId}-site_plan_awal_induk.${sitePlanAwalInduk.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(sitePlanAwalIndukRef, sitePlanAwalInduk);
    const sitePlanAwalIndukUrl = await getDownloadURL(sitePlanAwalIndukRef);

    const sitePlanPerubahanRef = sitePlanPerubahan ? ref(storage, `site_plan_perubahan/${userId}-site_plan_perubahan.${sitePlanPerubahan.name.split('.').pop() || '.jpg'}`) : null;
    if (sitePlanPerubahan) {
        await uploadBytes(sitePlanPerubahanRef!, sitePlanPerubahan);
    }
    const sitePlanPerubahanUrl = sitePlanPerubahan ? await getDownloadURL(sitePlanPerubahanRef!) : null;

    const sitePlanDiarsirSertaLuasanRef = ref(storage, `site_plan_diarsir_serta_luasan/${userId}-site_plan_diarsir_serta_luasan.${sitePlanDiarsirSertaLuasan.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(sitePlanDiarsirSertaLuasanRef, sitePlanDiarsirSertaLuasan);
    const sitePlanDiarsirSertaLuasanUrl = await getDownloadURL(sitePlanDiarsirSertaLuasanRef);

    const izinBPNRef = izinBPN ? ref(storage, `izin_bpn/${userId}-izin_bpn.${izinBPN.name.split('.').pop() || '.jpg'}`) : null;
    if (izinBPN) {
        await uploadBytes(izinBPNRef!, izinBPN);
    }
    const izinBPNUrl = izinBPN ? await getDownloadURL(izinBPNRef!) : null;

    const rekomendasiTPURef = rekomendasiTPU ? ref(storage, `rekomendasi_tpu/${userId}-rekomendasi_tpu.${rekomendasiTPU.name.split('.').pop() || '.jpg'}`) : null;
    if (rekomendasiTPU) {
        await uploadBytes(rekomendasiTPURef!, rekomendasiTPU);
    }
    const rekomendasiTPUUrl = rekomendasiTPU ? await getDownloadURL(rekomendasiTPURef!) : null;

    const rekomendasiPetuntukanLahanRef = rekomendasiPetuntukanLahan ? ref(storage, `rekomendasi_petuntukan_lahan/${userId}-rekomendasi_petuntukan_lahan.${rekomendasiPetuntukanLahan.name.split('.').pop() || '.jpg'}`) : null;
    if (rekomendasiPetuntukanLahan) {
        await uploadBytes(rekomendasiPetuntukanLahanRef!, rekomendasiPetuntukanLahan);
    }
    const rekomendasiPetuntukanLahanUrl = rekomendasiPetuntukanLahan ? await getDownloadURL(rekomendasiPetuntukanLahanRef!) : null;

    const sertifikatPSUPemechanRef = sertifikatPSUPemechan ? ref(storage, `sertifikat_psu_pemechan/${userId}-sertifikat_psu_pemechan.${sertifikatPSUPemechan.name.split('.').pop() || '.jpg'}`) : null;
    if (sertifikatPSUPemechan) {
        await uploadBytes(sertifikatPSUPemechanRef!, sertifikatPSUPemechan);
    }
    const sertifikatPSUPemechanUrl = sertifikatPSUPemechan ? await getDownloadURL(sertifikatPSUPemechanRef!) : null;

    const buktiPembayaranKompensasiLahanKuburanRef = buktiPembayaranKompensasiLahanKuburan ? ref(storage, `bukti_pembayaran_kompensasi_lahan_kuburan/${userId}-bukti_pembayaran_kompensasi_lahan_kuburan.${buktiPembayaranKompensasiLahanKuburan.name.split('.').pop() || '.jpg'}`) : null;
    if (buktiPembayaranKompensasiLahanKuburan) {
        await uploadBytes(buktiPembayaranKompensasiLahanKuburanRef!, buktiPembayaranKompensasiLahanKuburan);
    }
    const buktiPembayaranKompensasiLahanKuburanUrl = buktiPembayaranKompensasiLahanKuburan ? await getDownloadURL(buktiPembayaranKompensasiLahanKuburanRef!) : null;

    const newData = {
        'nama_perumahan': namaPerumahan,
        'nama_pengaju': namaPengaju,
        'no_telepon': noTelepon,
        'lokasi': lokasi,
        'kelurahan': kelurahan,
        'kecamatan': kecamatan,
        'psu_area': psuArea,
        'surat_permohonan': suratPermohonanUrl,
        'ktp_direktur': ktpDirekturUrl,
        'npwp_pendiri_perusahaan': npwpPendiriPerusahaanUrl,
        'surat_pernyataan_kebenaran': suratPernyataanKebenaranUrl,
        'surat_pernyataan_penyerahan_psu': suratPernyataanPenyerahanPSUUrl,
        'site_plan_awal_induk': sitePlanAwalIndukUrl,
        'site_plan_perubahan': sitePlanPerubahanUrl,
        'site_plan_diarsir_serta_luasan': sitePlanDiarsirSertaLuasanUrl,
        'izin_bpn': izinBPNUrl,
        'rekomendasi_tpu': rekomendasiTPUUrl,
        'rekomendasi_petuntukan_lahan': rekomendasiPetuntukanLahanUrl,
        'sertifikat_psu_pemechan': sertifikatPSUPemechanUrl,
        'bukti_pembayaran_kompensasi_lahan_kuburan': buktiPembayaranKompensasiLahanKuburanUrl,
        'form_created_at': formCreatedAt,
    }

    // append data to database
    await updateDoc(doc(db, "user", userId), newData);
}