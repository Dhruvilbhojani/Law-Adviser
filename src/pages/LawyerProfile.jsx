import React from 'react'
import Navbar from '../components/Navbar';
import { Stack, Typography, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

export default function LawyerProfile() {
    return (
        <>
            <Navbar></Navbar>
            <Stack padding={5} spacing={1}>
                <Stack direction={'row'}>
                    <Stack spacing={2}>
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                            style={{ width: '250px', borderRadius: '50%', border: '1px solid black' }}
                        />
                        <Stack direction='row' justifyContent={'center'}>
                            <LocationOnIcon />
                            <Typography minWidth={'fit-content'}>Ahmedabad</Typography>
                        </Stack>
                    </Stack>
                    <Stack style={{ width: '-webkit-fill-available', alignItems: 'start', justifyContent: 'space-around' }} paddingX={3} paddingLeft={10} paddingY={1}>
                        <Stack direction={'row'} style={{ width: '-webkit-fill-available', justifyContent: 'space-between' }} alignItems={'center'}>
                            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                <Typography variant='h4' fontWeight={'bold'} textAlign={'left'}>
                                    Mit Chatrola
                                </Typography>
                                <VerifiedIcon />
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Button variant='outlined'>Send Message</Button>
                                <Button variant='contained'>View Contact Number</Button>
                            </Stack>

                        </Stack>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Advocate
                        </Typography>
                        <Stack direction='row' style={{ color: '#e28743' }}>
                            <Typography minWidth={'fit-content'}>4.8</Typography>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                            <Typography paddingX={3} minWidth={'fit-content'}>(900)</Typography>
                        </Stack>

                        <Typography fontSize={'lg'} fontWeight={'bold'}>Hall of fame</Typography>
                        <Stack direction='row' spacing={2}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                loading="lazy"
                                alt=""
                                style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                loading="lazy"
                                alt=""
                                style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                loading="lazy"
                                alt=""
                                style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                            />
                        </Stack>
                        <Typography fontSize={'lg'} fontWeight={'bold'}>Medal</Typography>
                        <Stack direction='row' spacing={2}>
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                            <WorkspacePremiumIcon />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Languages
                        </Typography>
                    </Stack>
                    <Typography variant='body'>
                        English, Hindi, Kannada, Telugu
                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Practice Areas
                        </Typography>
                    </Stack>
                    <Typography variant='body' textAlign={'justify'}>
                        Anticipatory Bail, Arbitration, Bankruptcy / Insolvency, Breach of Contract, Cheque Bounce, Child Custody, Consumer Court, Corporate, Criminal, Cyber Crime, Divorce, Documentation, Domestic Violence, High Court, Insurance, Labour & Service, Landlord/Tenant, Media and Entertainment, Medical Negligence, Motor Accident, NCLT, Property, Recovery, RERA, Succession Certificate, Supreme Court, Wills / Trusts
                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            About
                        </Typography>
                    </Stack>
                    <Typography variant='body' textAlign={'justify'}>
                        Advocate Rajesh K.S has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has acquired excellent professional experience in providing legal consultancy and advisory services in various fields of law.Advocate Rajesh provides legal services in a variety of legal areas including, Family Disputes, Property related Matters, Matrimonial Disputes, and Drafting and vetting of various agreements and connected matters, Writ Jurisdiction, Service matters, Civil matters, Criminal matters, and other miscellaneous matters. He has extensive knowledge and expertise in criminal law and has appeared in a variety of criminal matters in various courts in and around Bangalore. He is also very competent in handling divorce and family disputes in original as well as appellate side to achieve excellent results for his clients.Advocate Rajesh is enrolled with the Bar Council of Karnataka. He has a significant amount of professional experience in providing all kinds of legal consultancy and advisory services. Advocate Rajesh's professional experience has led him to gain proficiency, not only in arguing before the Honorable Courts, but also in consulting clients and even in the art of drafting and pleading.
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
