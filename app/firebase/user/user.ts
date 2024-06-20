export interface UserProps {
    id: string;
    username: string;
    name: string;
    createdAt: number;
    residence: string;
    role: string;
    category: string;
}

export function jsonToUser(json: {
    [key: string]: any;
}): UserProps {

    return {
        id: json.id || "",
        username: json.username || "",
        name: json.name || "",
        createdAt: json.created_at || 0,
        role: json.role || "",
        residence: json.residence || "",
        category: json.category || "",
    };
}

export interface UserSignupProps {
    id: string;
    residenceName: string;
    username: string;
    idCardUrl: string;
    createdAt: number;
}

export function jsonToUserSignup(json: {
    [key: string]: any;
}): UserSignupProps {

    return {
        id: json.id || "",
        residenceName: json.residence_name || "",
        username: json.username || "",
        idCardUrl: json.id_card || "",
        createdAt: json.created_at || 0,
    };
}

export interface UserSubmitFormProps {
    id: string;
    residenceName: string;
    username: string;
    namaPerumahan: string;
    namaPengaju: string;
    noTelepon: string;
    lokasi: string;
    kelurahan: string;
    kecamatan: string;
    psuArea: number;
    suratPermohonanUrl: string;
    ktpDirekturUrl: string;
    npwpPendiriPerusahaanUrl: string;
    suratPernyataanKebenaranUrl: string;
    suratPernyataanPenyerahanPSUUrl: string;
    sitePlanAwalIndukUrl: string;
    sitePlanPerubahanUrl: string | null;
    sitePlanDiarsirSertaLuasanUrl: string;
    izinBPNUrl: string | null;
    rekomendasiTPUUrl: string | null;
    rekomendasiPetuntukanLahanUrl: string | null;
    sertifikatPSUPemechanUrl: string | null;
    buktiPembayaranKompensasiLahanKuburanUrl: string | null;
    formCreatedAt: number;
}

export function jsonToUserSubmitForm(json: {
    [key: string]: any;
}): UserSubmitFormProps {

    return {
        id: json.id || "",
        residenceName: json.residence_name || "",
        username: json.username || "",
        namaPerumahan: json.nama_perumahan || "",
        namaPengaju: json.nama_pengaju || "",
        noTelepon: json.no_telepon || "",
        lokasi: json.lokasi || "",
        kelurahan: json.kelurahan || "",
        kecamatan: json.kecamatan || "",
        psuArea: json.psu_area || 0,
        suratPermohonanUrl: json.surat_permohonan || "",
        ktpDirekturUrl: json.ktp_direktur || "",
        npwpPendiriPerusahaanUrl: json.npwp_pendiri_perusahaan || "",
        suratPernyataanKebenaranUrl: json.surat_pernyataan_kebenaran || "",
        suratPernyataanPenyerahanPSUUrl: json.surat_pernyataan_penyerahan_psu || "",
        sitePlanAwalIndukUrl: json.site_plan_awal_induk || "",
        sitePlanPerubahanUrl: json.site_plan_perubahan || null,
        sitePlanDiarsirSertaLuasanUrl: json.site_plan_diarsir_serta_luasan || "",
        izinBPNUrl: json.izin_bpn || null,
        rekomendasiTPUUrl: json.rekomendasi_tpu || null,
        rekomendasiPetuntukanLahanUrl: json.rekomendasi_petuntukan_lahan || null,
        sertifikatPSUPemechanUrl: json.sertifikat_psu_pemechan || null,
        buktiPembayaranKompensasiLahanKuburanUrl: json.bukti_pembayaran_kompensasi_lahan_kuburan || null,
        formCreatedAt: json.form_created_at || 0,
    };
}